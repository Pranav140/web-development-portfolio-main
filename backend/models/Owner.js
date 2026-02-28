const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String, required: true },
    tagline: { type: String, default: "Code / Design / Craft / Repeat" },
    email: { type: String, required: true },
    resumeLink: { type: String },
    portrait: { type: String },
    social: {
      github: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
    },
    footerLinks: [
      {
        label: { type: String },
        url: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Owner", ownerSchema);
