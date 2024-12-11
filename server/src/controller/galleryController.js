const Gallery = require('../models/galleryModel.js')


const Create = async (req, res) => {
    try {
        const { name, category } = req.body;

    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}

module.exports = { Create }