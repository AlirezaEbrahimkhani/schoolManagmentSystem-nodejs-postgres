const asyncHandler = require("../middleware/async");
const client = require("../config/db");
const convertResponse = require("../utilities/convert-reponse");

// @desc        class scores average higher than x
// @route       GET /api/student/filter/average-higher
// @access      Public
exports.getClassScoresAverageHigherThanX = asyncHandler(
  async (req, res, next) => {
    const { average } = req.query;
    await client.query(
      "select to_json(public.class_scores_average_higher_than_x($1))",
      [average],
      (err, result) => {
        const { rows } = result;
        if (!err) res.status(200).json(convertResponse(rows, "to_json"));
      }
    );
  }
);

// @desc        student x score average for course y
// @route       GET /api/student/filter/average-course
// @access      Public
exports.getStudentsXScoreAverageForCourseY = asyncHandler(
  async (req, res, next) => {
    const { courseName, firstName, lastName } = req.body;
    await client.query(
      "select to_json(public.student_x_score_average_for_course_y($1, $2, $3))",
      [courseName, firstName, lastName],
      (err, result) => {
        const { rows } = result;
        if (!err) res.status(200).json(convertResponse(rows, "to_json"));
      }
    );
  }
);
