const mongoose = require('mongoose');

connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log("Successfully Connected to MongoDB "))
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = { connectDB };
