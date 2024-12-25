const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        expertise: {
            type: String,
            required: true
        },
        facebook:{
            type:String
        },
        instagram:{
            type:String
        },
        twitter:{
            type:String
        },
        linkedin:{
            type:String
        },
        image: {
            type: String,
            required: true
        },
    }
)

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;