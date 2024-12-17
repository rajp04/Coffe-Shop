const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        blogId: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;