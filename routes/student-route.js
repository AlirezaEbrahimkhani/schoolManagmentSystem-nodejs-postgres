const express = require("express");
const router = express.Router();
const {
  getStudents,
  createStudent,
  deleteStudent,
  getSingleStudent,
  updateStudent,
} = require("../controller/student-controller");

router
  .get("/", getStudents)
  .post(createStudent)
  .delete(deleteStudent)
  .put(updateStudent);

router.get("/:id", getSingleStudent);
module.exports = router;
