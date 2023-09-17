const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>  console.log("Database connection has been established successfully") )
    .catch((error) => {
        console.log("Your connection has an error");
        console.error(error.message);
        process.exit(1);
    });
};

module.exports = dbConnect;