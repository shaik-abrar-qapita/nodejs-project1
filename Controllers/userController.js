const express = require("express");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const UserModel = require("../Models/userModel");

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  const existingUser = await UserModel.findOne({ email });
  // console.log(email, password);
  const check = await bcrypt.compare(password, existingUser.password);
  console.log("login", existingUser, check);

  if (existingUser && check) {
    const accessToken = jwt.sign({ existingUser }, process.env.ACCESS_TOKEN, {
      expiresIn: "1m",
    });
    res.status(200).json(accessToken);
  } else {
    res.status(400);
    throw new Error(
      "Passwords aren't matching or user with email id doesn't exisits"
    );
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.status(400);
    throw new Error("All fields are manadatory!");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    fullName,
    email,
    password: hashedPassword,
  };

  const result = await UserModel.create(newUser);
  res.status(201).json(result);
});

const getAllUsers = asyncHandler(async (req, res) => {
  const result = await UserModel.find();
  res.status(200).json(result);
});

const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "This is current User" });
});

const deleteUser = asyncHandler(async (req, res) => {
  const find = await UserModel.findOne({ _id: req.params.id });

  if (!find) {
    res.status(404);
    throw new Error("Cannot find user");
  }
  const result = await UserModel.deleteOne({ _id: req.params.id });

  res.status(204).send("User deleted successfully!");
});

module.exports = {
  loginUser,
  registerUser,
  getCurrentUser,
  getAllUsers,
  deleteUser,
};
