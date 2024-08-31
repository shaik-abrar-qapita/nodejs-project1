const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

const connectDb = async () => {
  try {
    console.log("uri", process.env.CONNECTION_URI);

    const connect = await mongoose.connect(process.env.CONNECTION_URI);

    console.log("Database connected - ", connect.connection.host);
    console.log("Database name - ", connect.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
