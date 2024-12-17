const Comment = require('../models/commentModel.js');

const Create = async (req, res) => {
    try {
        const { name, email, blogId, comment } = req.body;

        const Result = await Comment.create({ name, email, blogId, comment });

        return res.json({
            Result,
            success: 1,
            message: 'Comment send successfully'
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const GetComment = async (req, res) => {
    try {
        const result = await Comment.find();

        return res.json({
            result,
            success: 1,
            message: "Comment data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const GetById = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Comment.find({ blogId: id });

        return res.json({
            result,
            success: 1,
            message: "Comment data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}

module.exports = { Create, GetById, GetComment }