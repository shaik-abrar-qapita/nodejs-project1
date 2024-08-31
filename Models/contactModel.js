const mongoose = require("mongoose");

const contactShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: Number,
      requird: [true, "Phone no is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactShema);
