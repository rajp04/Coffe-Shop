const express = require('express');
const { Role, Admin } = require('../models/adminModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

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
        // if (!admin || !admin.role.permissions.some(p => permissions.includes(p))) {
        //     return res.status(403).send('Permission Denied');
        // }
        if (!admin || (!admin.role.permissions.includes('*') && !admin.role.permissions.some(p => permissions.includes(p)))) {
            return res.status(403).send('Permission Denied');
        }
        next();
    };
};

// Default admin setup
const setupDefaultAdmin = async () => {
    try {
        const defaultRole = await Role.findOneAndUpdate(
            { name: 'Admin' },
            { $setOnInsert: { permissions: ['*'] } },
            { new: true, upsert: true }
        );

        const defaultAdmin = await Admin.findOne({ email: 'admin@example.com' });
        if (!defaultAdmin) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await Admin.create({
                username: 'defaultAdmin',
                email: 'admin@example.com',
                password: hashedPassword,
                role: defaultRole._id
            });
        }
    } catch (err) {
        console.error('Error setting up default admin:', err);
    }
};
setupDefaultAdmin();

// API Routes

// 1. Add a new role
router.post('/roles', authenticate, authorize(['add_role']), async (req, res) => {
    try {
        const { name, permissions } = req.body;
        const role = await Role.create({ name, permissions });
        res.status(201).json(role);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 2. Get all roles
router.get('/roles', authenticate, authorize(['view_roles']), async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 3. Add a new admin
router.post('/admins', authenticate, authorize(['add_admin']), async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({ username, email, password: hashedPassword, role });
        res.status(201).json(admin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 4. Get all admins
router.get('/admins', authenticate, authorize(['view_admins']), async (req, res) => {
    try {
        const admins = await Admin.find().populate('role');
        res.json(admins);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 5. Update role permissions
router.put('/roles/:id', authenticate, authorize(['edit_role']), async (req, res) => {
    try {
        const { permissions } = req.body;
        const role = await Role.findByIdAndUpdate(req.params.id, { permissions }, { new: true });
        if (!role) return res.status(404).send('Role not found');
        res.json(role);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 6. Admin login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email }).populate('role');
        if (!admin || !(bcrypt.compare(password, admin.password))) {
            return res.status(400).send('Invalid credentials');
        }
        const token = jwt.sign({ _id: admin._id, role: admin.role.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, success: 1 });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 7. Get admin panel access
router.get('/admin-panel', authenticate, async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin._id).populate('role');
        if (!admin) return res.status(404).send('Admin not found');
        res.json({ username: admin.username, role: admin.role.name, permissions: admin.role.permissions });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;