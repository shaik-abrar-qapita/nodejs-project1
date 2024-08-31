console.log("Express server");

const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/contacts", require("./Routes/ContactRoute"));

const p = process.env.PORT;

app.listen(p, () => {
  console.log("inside app", p);
});
