const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookController");

router.post("/books", controller.createBook);
router.get("/books", controller.getBooks);
router.get("/books/:id", controller.getBook);
router.put("/books/:id", controller.updateBook);
router.delete("/books/:id", controller.deleteBook);

router.post("/books/:id/borrow", controller.borrowBook);
router.post("/books/:id/return", controller.returnBook);

module.exports = router;