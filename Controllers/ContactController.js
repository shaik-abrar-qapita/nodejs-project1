const express = require("express");

const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
};

const getContactById = (req, res) => {
  res.status(200).json({ message: `Get Contact By Id ${req?.params?.id}` });
};

const addNewContact = (req, res) => {
  res.status(201).json({ message: "Contact has been created Successfully!" });
};

const deleteContact = (req, res) => {
  console.log(req.body);

  res.status(200).json({
    message: `${req.params.id} contact has been deleted successfully`,
  });
};

const updateContact = (req, res) => {
  res.status(200).json({
    message: `${req.params.id} contact has been updated successfully`,
    body: req.body,
  });
};

module.exports = {
  getAllContacts,
  getContactById,
  addNewContact,
  deleteContact,
  updateContact,
};
