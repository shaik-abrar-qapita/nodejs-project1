console.log("Express server");
console.log("line 2");

const express = require("express");

const app = express();

const dotenv = require("dotenv").config();

const p = process.env.PORT;

console.log(p, "abrar");

app.listen(p, () => {
  console.log("inside app", p);
});
