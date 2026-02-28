const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: "" },
    projectType: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false }, // for admin tracking
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
