const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/crud-data");
        console.log("connected sucsessfully...");
    } catch(err) {
        console.log("error in connection "+err);
    }
}

module.exports = connectDB;