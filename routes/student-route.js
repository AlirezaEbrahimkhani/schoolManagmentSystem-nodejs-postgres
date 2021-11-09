const express = require("express");
const router = express.Router();
const {
  getStudents,
  createStudent,
  deleteStudent,
  getSingleStudent,
  updateStudent,
} = require("../controller/student-controller");

router.get("/", getStudents).post("/", createStudent).put("/", updateStudent);

router.get("/:id", getSingleStudent).delete("/:id", deleteStudent);
module.exports = router;
