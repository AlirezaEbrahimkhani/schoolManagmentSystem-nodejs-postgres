const express = require("express");
const router = express.Router();
const {
  getClassScoresAverageHigherThanX,
} = require("../controller/student-filter-controller");

router.get("/", getClassScoresAverageHigherThanX);

module.exports = router;
