const Booking = require('../models/bookingModel.js');


const Create = async (req, res) => {
    try {
        const { name, email, phone, date, time, seats, notes } = req.body;

        const Result = await Booking.create({ name, email, phone, date, time, seats, notes });

        return res.json({
            Result,
            success: 1,
            message: 'Book Table successfully'
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}

module.exports = { Create }