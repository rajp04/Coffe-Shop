const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    permissions: {
        type: Map,
        of: [String],
        default: {}
    }
}, {
    timestamps: true
});


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
        ref: 'Role',
        required: true
    }
}, {
    timestamps: true
});


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


AdminSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const Role = mongoose.model('Role', RoleSchema);
const Admin = mongoose.model('Admin', AdminSchema);

module.exports = { Role, Admin };