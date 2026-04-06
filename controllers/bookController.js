const Book = require("../models/bookModel");

// Create Book
exports.createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

// Get All Books with pagination and search
exports.getBooks = async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;

  const books = await Book.find({
    title: { $regex: search, $options: "i" },
  })
    .populate("authors")
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(books);
};

// Get Book by ID
exports.getBook = async (req, res) => {
  const book = await Book.findById(req.params.id)
    .populate("authors")
    .populate("borrowedBy")
    .populate("issuedBy");

  res.json(book);
};


// Update Book
exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(book);
};

// Delete Book
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};


// Borrow Book
exports.borrowBook = async (req, res) => {
  const { studentId, attendantId, returnDate } = req.body;

  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (book.status === "OUT") {
    return res.status(400).json({ message: "Book already borrowed" });
  }

  book.status = "OUT";
  book.borrowedBy = studentId;
  book.issuedBy = attendantId;
  book.returnDate = returnDate;

  await book.save();

  res.json({ message: "Book borrowed successfully", book });
};

// Return Book
exports.returnBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (book.status === "IN") {
    return res.status(400).json({ message: "Book already returned" });
  }

  book.status = "IN";
  book.borrowedBy = null;
  book.issuedBy = null;
  book.returnDate = null;

  await book.save();

  res.json({ message: "Book returned successfully", book });
};