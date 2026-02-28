const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true }, // path or URL to the project image
    description: { type: String, default: "" },
    url: { type: String, default: "" },
    featured: { type: Boolean, default: false }, // shown in featured-work section
    order: { type: Number, default: 0 },        // display order
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
