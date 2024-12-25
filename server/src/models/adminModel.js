// Import necessary modules
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema for roles
const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    permissions: {
        type: [String], // Array of permissions, e.g., ['add_user', 'delete_event']
        default: []
    },
}, {
    timestamps: true
});

// Define the schema for admins
const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role', // Reference to the Role model
        required: true
    }
}, {
    timestamps: true
});

// Hash the admin password before saving
AdminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

// Method to compare passwords for authentication
AdminSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Create models
const Role = mongoose.model('Role', RoleSchema);
const Admin = mongoose.model('Admin', AdminSchema);

module.exports = { Role, Admin };