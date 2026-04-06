const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

router.post("/students", controller.createStudent);
router.get("/students", controller.getStudents);
router.get("/students/:id", controller.getStudent);

module.exports = router;