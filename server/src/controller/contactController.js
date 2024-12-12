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


const GetContact = async (req, res) => {
    try {
        const result = await Contact.find();

        return res.json({
            result,
            success: 1,
            message: "Contact data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const GetByIdContact = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Contact.findById(id);

        return res.json({
            result,
            success: 1,
            message: "Contact data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}

module.exports = { Create, GetContact, GetByIdContact }