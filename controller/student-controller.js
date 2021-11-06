const asyncHandler = require("../middleware/async");
const client = require("../config/db");

// @desc        Get all students
// @route       GET /api/student
// @access      Public
exports.getStudents = asyncHandler(async (req, res, next) => {
  res.status(200).json({});
});
