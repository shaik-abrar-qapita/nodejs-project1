const express = require("express");
const Router = express.Router();

const {
  getAllContacts,
  getContactById,
  addNewContact,
  deleteContact,
  updateContact,
} = require("../Controllers/ContactController");

Router.route("/all").get(getAllContacts);

Router.route("/byid/:id").get(getContactById);

Router.route("/add").post(addNewContact);

Router.route("/del/:id").delete(deleteContact);

Router.route("/update/:id").put(updateContact);

module.exports = Router;
