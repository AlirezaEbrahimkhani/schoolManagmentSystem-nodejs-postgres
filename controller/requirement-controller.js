const asyncHandler = require("../middleware/async");
const client = require("../config/db");
const convertResponse = require("../utilities/convert-reponse");

// @desc        Get all grade levels
// @route       GET /api/requirement/grade-level
// @access      Public
exports.getGradeLevels = asyncHandler(async (req, res, next) => {
  await client.query(
    "select to_json(public.get_grade_level())",
    (err, result) => {
      const { rows } = result;
      if (!err) res.status(200).json(convertResponse(rows, "to_json"));
    }
  );
});
