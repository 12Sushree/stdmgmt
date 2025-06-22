const express = require("express");
const Student = require("../../models/Student");
const router = express.Router();

// Test route
router.get("/test", (_req, res) => {
  res.send("Test API route is working fine");
});

// @route   GET api/students
// @desc    Get all students
// @access  Public
router.get("/", async (_req, res) => {
  try {
    const students = await Student.find();
    res.json({ students });
  } catch (err) {
    res.status(500).json({ error: "Server error while fetching students" });
  }
});

// @route   GET api/students/:id
// @desc    Get a student by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(404).json({ error: "Student not found" });
  }
});

// @route   POST api/students
// @desc    Add a new student
// @access  Public
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json({ msg: "Student added successfully", student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// @route   PUT api/students/:id
// @desc    Update a student by ID
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ msg: "Student details updated successfully", student });
  } catch (err) {
    res.status(400).json({ error: "Unable to update the Student details" });
  }
});

// @route   DELETE api/students/:id
// @desc    Delete a student by ID
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ msg: "Student entry deleted successfully" });
  } catch (err) {
    res.status(404).json({ error: "Student not found" });
  }
});

module.exports = router;
