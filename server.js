console.log("Express server");

const dotenv = require("dotenv").config();
const express = require("express");
const Routers = require("./Routes/ContactRoute");
const errorHandler = require("./Middlewares/errorhandler");
const connectDb = require("./Config/dbConnection");

const app = express();
connectDb();

app.use(express.json());

app.use("/api/contacts", Routers);

app.use(errorHandler);

const p = process.env.PORT;

// console.log("MongoDB URI:", process.env.CONNECTION_URI);

app.listen(p, () => {
  console.log("inside app", p);
});
