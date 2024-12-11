const Blog = require('../models/blogModel.js')


const Create = async (req, res) => {
    try {
        
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}

module.exports = { Create }