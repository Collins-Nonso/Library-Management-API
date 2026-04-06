const Student = require("../models/studentModel");

// Create Student
exports.createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
};

// Get All Students
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// Get Student by ID
exports.getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};