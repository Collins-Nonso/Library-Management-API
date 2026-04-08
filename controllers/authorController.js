const Author = require("../models/authorModel");

// Create Author
exports.createAuthor = async (req, res) => {
  const author = await Author.create(req.body);
  res.status(201).json(author);
};

// Get All Authors
exports.getAuthors = async (req, res) => {
  const authors = await Author.find();
  res.status(200).json(authors);
};

// Get Author by ID
exports.getAuthor = async (req, res) => {
  const author = await Author.findById(req.params.id);
  res.status(200).json(author);
};

// Update Author
exports.updateAuthor = async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(author);
};

// Delete Author
exports.deleteAuthor = async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.json({ message: "Author deleted" });
};