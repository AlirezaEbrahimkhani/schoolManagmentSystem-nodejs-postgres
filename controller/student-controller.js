const asyncHandler = require("../middleware/async");
const client = require("../config/db");

// @desc        Get all students
// @route       GET /api/student
// @access      Public
exports.getStudents = asyncHandler(async (req, res, next) => {
  res.status(200).json({});
});

// @desc        Get single student
// @route       Get /api/student/:id
// @access      Public
exports.getSingleStudent = asyncHandler(async (req, res, next) => {
  res.status(200).json({});
});

// @desc        Create new student
// @route       POST /api/student
// @access      Public
exports.createStudent = asyncHandler(async (req, res, next) => {
  res.status(200).json({});
});

// @desc        Update student information
// @route       PUT /api/student
// @access      Public
exports.updateStudent = asyncHandler(async (req, res, next) => {
  res.status(200).json({});
});

// @desc        Delete a student
// @route       Delete /api/student
// @access      Public
exports.deleteStudent = asyncHandler(async (req, res, next) => {
  res.status(200).json({});
});
