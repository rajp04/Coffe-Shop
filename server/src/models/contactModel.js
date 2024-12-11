const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            require: true
        },
        subject: {
            type: String,
            required: true
        },
        notes: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact