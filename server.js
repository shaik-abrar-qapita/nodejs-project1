console.log("Express server");

const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRouter = require("./Routes/ContactRoute");
const userRouter = require("./Routes/userRoute");
const errorHandler = require("./Middlewares/errorhandler");
const connectDb = require("./Config/dbConnection");

const app = express();
connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRouter);

app.use("/api/user", userRouter);

app.use(errorHandler);

const p = process.env.PORT;

// console.log("MongoDB URI:", process.env.CONNECTION_URI);

app.listen(p, () => {
  console.log("inside app", p);
});
