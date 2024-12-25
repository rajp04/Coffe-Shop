// Middleware: authMiddleware.js
const jwt = require('jsonwebtoken');
const { Admin } = require('../models/adminModel.js');

// Middleware for authentication
const authenticate = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).send('Access Denied');
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

// Middleware for role-based access
const authorize = (permissions) => {
    return async (req, res, next) => {
        const admin = await Admin.findById(req.admin._id).populate('role');
        if (!admin || (!admin.role.permissions.includes('*') && !admin.role.permissions.some(p => permissions.includes(p)))) {
            return res.status(403).send('Permission Denied');
        }        
        next();
    };
};

module.exports = { authenticate, authorize };