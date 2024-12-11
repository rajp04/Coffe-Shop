const Contact = require('../models/contactModel.js');


const Create = async (req, res) => {
    try {
        const { name, email, phone, subject, notes } = req.body;

        const Result = await Contact.create({ name, email, phone, subject, notes });

        return res.json({
            Result,
            success: 1,
            message: 'Message send successfully'
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `Try again, ${error.message}`
        })
    }
}

module.exports = { Create }