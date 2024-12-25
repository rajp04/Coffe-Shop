const mongoose = require('mongoose')

const specialitiesSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
    }
)

const Specialities = mongoose.model('Specialities', specialitiesSchema);
module.exports = Specialities;