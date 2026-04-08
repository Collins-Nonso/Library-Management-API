const Attendant = require("../models/attendantModel");

// Create Attendant
exports.createAttendant = async (req, res) => {
  const attendant = await Attendant.create(req.body);
  res.status(201).json(attendant);
};

// Get All Attendants
exports.getAttendants = async (req, res) => {
  const attendants = await Attendant.find();
  res.status(200).json(attendants);
};
