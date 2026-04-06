const express = require("express");
const router = express.Router();
const controller = require("../controllers/authorController");

router.post("/authors", controller.createAuthor);
router.get("/authors", controller.getAuthors);
router.get("/authors/:id", controller.getAuthor);
router.put("/authors/:id", controller.updateAuthor);
router.delete("/authors/:id", controller.deleteAuthor);

module.exports = router;