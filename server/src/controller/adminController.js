const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { Role, Admin } = require('../models/adminModel.js');

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
const authorize = (requiredPermissions) => {
    return async (req, res, next) => {
        try {
            const admin = await Admin.findById(req.admin._id).populate('role');
            if (!admin || !admin.role) {
                return res.status(403).json({ error: "Admin role not found." });
            }

            const rolePermissions = admin.role.permissions || new Map();
            // console.log("Role Permissions (Map):", rolePermissions);

            // Ensure required permissions are satisfied
            const hasPermission = requiredPermissions.every(permission => {
                const [section, action] = permission.split('_');                
                const sectionPermissions = rolePermissions.get(section); 
                return sectionPermissions?.includes(action) || sectionPermissions?.includes('*');
            });

            // console.log("Has Permission:", hasPermission);

            if (!hasPermission) {
                return res.status(403).json({ error: "You do not have the required permissions." });
            }

            next();
        } catch (error) {
            console.error("Authorization error:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };
};


// Default admin setup
const setupDefaultAdmin = async () => {
    try {
        let defaultRole = await Role.findOne({ name: 'Admin' });
        if (!defaultRole) {
            defaultRole = await Role.create({
                name: 'Admin',
                permissions: {
                    role: ['add', 'view', 'edit', 'delete'],
                    menu: ['add', 'view', 'edit', 'delete'],
                    service: ['add', 'view', 'edit', 'delete'],
                    contact: ['add', 'view', 'edit', 'delete'],
                    hometeammember: ['add', 'view', 'edit', 'delete'],
                    hometestimonial: ['add', 'view', 'edit', 'delete'],
                    homebanner: ['add', 'view', 'edit', 'delete'],
                    blog: ['add', 'view', 'edit', 'delete'],
                    dashboard: ['add', 'view', 'edit', 'delete'],
                    booking: ['add', 'view', 'edit', 'delete'],
                    gallery: ['add', 'view', 'edit', 'delete'],
                    admins: ['add', 'view', 'edit', 'delete'],
                },
            });
        }

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
router.post('/roles', authenticate, authorize(['role_add']), async (req, res) => {
    try {
        const { name, permissions } = req.body;

        if (permissions && typeof permissions !== 'object') {
            return res.status(400).json({ error: "Permissions must be an object with arrays as values." });
        }

        const formattedPermissions = Object.keys(permissions || {}).reduce((acc, key) => {
            if (!Array.isArray(permissions[key])) {
                throw new Error(`Permissions for ${key} must be an array of strings.`);
            }
            acc[key] = permissions[key];
            return acc;
        }, {});

        const role = await Role.create({ name, permissions: formattedPermissions });
        res.status(201).json({ role });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 2. Get all roles
router.get('/roles', authenticate, authorize(['role_view']), async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 3. Add a new admin
router.post('/admins', authenticate, authorize(['role_add']), async (req, res) => {
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
router.get('/admins', authenticate, authorize(['role_view']), async (req, res) => {
    try {
        const admins = await Admin.find().populate('role');
        res.json({ admins, success: 1 });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 5. Update role permissions
router.put('/roles/:id', authenticate, authorize(['role_edit']), async (req, res) => {
    try {
        const id = req.params.id;
        const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

        if (!isValidObjectId) {
            return res.status(400).json({ error: "Invalid Role ID format" });
        }

        const { permissions } = req.body;
        const formattedPermissions = Object.keys(permissions || {}).reduce((acc, key) => {
            if (!Array.isArray(permissions[key])) {
                throw new Error(`Permissions for ${key} must be an array of strings.`);
            }
            acc[key] = permissions[key];
            return acc;
        }, {});

        const role = await Role.findByIdAndUpdate(
            id,
            { permissions: formattedPermissions },
            { new: true }
        );

        if (!role) {
            return res.status(404).json({ error: "Role not found" });
        }

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

        const token = jwt.sign({ _id: admin._id, role: admin.role.name }, process.env.JWT_SECRET, { expiresIn: '1d' });
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
        res.json({ username: admin.username, role: admin.role.name, permissions: admin.role.permissions, success: 1 });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;