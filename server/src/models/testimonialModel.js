const mongoose = require('mongoose')

const testimonialSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }
)

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
module.exports = Testimonial