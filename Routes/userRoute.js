const express = require("express");
const {
  loginUser,
  registerUser,
  getCurrentUser,
  getAllUsers,
  deleteUser,
} = require("../Controllers/userController");

const Router = express.Router();

console.log("user database connected");

Router.route("/login").post(loginUser);

Router.route("/register").post(registerUser);

Router.route("/current").get(getCurrentUser);

Router.route("/all").get(getAllUsers);

Router.route("/delete/:id").delete(deleteUser);

module.exports = Router;
