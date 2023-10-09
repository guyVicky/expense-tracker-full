const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);

    } catch (err) {
        console.log(`Error: ${err.message}`.red);
    }
}

module.exports = connectDB;