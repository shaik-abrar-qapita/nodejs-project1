const express = require("express");
const asyncHandler = require("express-async-handler");
const Contacts = require("../Models/contactModel");
const mongoose = require("express");

const getAllContacts = asyncHandler(async (req, res) => {
  const result = await Contacts.find();

  res.status(200).json(result);
});

const getContactById = asyncHandler(async (req, res) => {
  const result = await Contacts.findById(req?.params?.id);
  console.log("findOne", result);

  if (!result) {
    res.status(404);
    throw new Error("The contact with the id is not found!");
  }
  res.status(200).json(result);
});

const addNewContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req?.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const result = await Contacts.create(req.body);
  res.status(201).json(result);
});

const deleteContact = asyncHandler(async (req, res) => {
  console.log(req.params);
  console.log("params id", req.params.id);

  // const id = await mongoose.Types.ObjectId(req.params.id);

  const result = await Contacts.deleteOne({ _id: req.params.id });
  console.log("delete", result);
  if (result.deletedCount === 0) {
    res.status(404);
    throw new Error("Cannot find the Contact");
  }

  res.status(200).json({
    message: `${req.params.id} contact has been deleted successfully`,
  });
});

const updateContact = asyncHandler(async (req, res) => {
  const existingContact = await Contacts.findById(req.params.id);
  if (!existingContact) {
    res.status(404);
    throw new Error("The contact with the id is not found!");
  }

  const result = await Contacts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(result);
});

module.exports = {
  getAllContacts,
  getContactById,
  addNewContact,
  deleteContact,
  updateContact,
};
