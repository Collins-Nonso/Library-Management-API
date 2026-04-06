const express = require("express");
const router = express.Router();
const controller = require("../controllers/attendantController");

router.post("/attendants", controller.createAttendant);
router.get("/attendants", controller.getAttendants);

module.exports = router;