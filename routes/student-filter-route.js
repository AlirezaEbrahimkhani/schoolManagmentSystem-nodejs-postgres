const express = require("express");
const router = express.Router();
const {
  getClassScoresAverageHigherThanX,
  getStudentsXScoreAverageForCourseY,
} = require("../controller/student-filter-controller");

router
  .get("/average-higher", getClassScoresAverageHigherThanX)
  .get("/average-course", getStudentsXScoreAverageForCourseY);

module.exports = router;
