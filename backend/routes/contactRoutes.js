const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact - submit contact form
router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, projectType, message } = req.body;

  if (!firstName || !lastName || !email || !projectType || !message) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    const contact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      projectType,
      message,
    });
    const saved = await contact.save();
    res.status(201).json({
      message: "Message received! I will get back to you within 24 hours.",
      id: saved._id,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/contact - get all messages (admin)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH /api/contact/:id/read - mark as read (admin)
router.patch("/:id/read", async (req, res) => {
  try {
    const msg = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!msg) return res.status(404).json({ message: "Message not found" });
    res.json(msg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
