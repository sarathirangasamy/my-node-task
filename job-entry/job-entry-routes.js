// employee/routes.js
const express = require("express");
const jobEntry = require("../job-entry/job-entry-schema"); 
const router = express.Router();

// Create an jobEntry
router.post("/job-entry/create", async (req, res) => {
  const createNewJobEntry = new jobEntry(req.body.modifyJobEntry);
  try {
    const savedJobEntry = await createNewJobEntry.save();
    res.status(201).json(savedJobEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
