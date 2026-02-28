const express = require("express");
const router = express.Router();
const Owner = require("../models/Owner");

// GET /api/owner - get portfolio owner info
router.get("/", async (req, res) => {
  try {
    const owner = await Owner.findOne();
    if (!owner) return res.status(404).json({ message: "Owner not found" });
    res.json(owner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/owner - update owner info (admin)
router.put("/", async (req, res) => {
  try {
    const owner = await Owner.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    res.json(owner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
