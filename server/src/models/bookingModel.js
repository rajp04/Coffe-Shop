const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
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
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        seats: {
            type: Number,
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
)

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;