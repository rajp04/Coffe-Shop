const mongoose = require('mongoose')

const Database = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}`);
        console.log(`\nMongoDB Connected.`);
    } catch (error) {
        console.log(`MongoDB Connection Failed.`);
        process.exit(1);
    }
}

module.exports = Database