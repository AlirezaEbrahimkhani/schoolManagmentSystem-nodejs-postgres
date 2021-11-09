const asyncHandler = require("../middleware/async");
const client = require("../config/db");

// @desc        Get all students
// @route       GET /api/student
// @access      Public
exports.getStudents = asyncHandler(async (req, res, next) => {
  await client.query(
    `select *, (select c.name as className from class c where s.classcid = c.clid) from student s`,
    (err, result) => {
      const { rows } = result;
      if (!err) res.status(200).json(rows);
    }
  );
});

// @desc        Get single student
// @route       Get /api/student/:id
// @access      Public
exports.getSingleStudent = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await client.query(
    `select *, (select c.name as className from class c where s.classcid = c.clid) from student s where s.sid = $1`,
    [id],
    (err, result) => {
      const { rows } = result;
      if (!err) res.status(200).json(rows);
    }
  );
});

// @desc        Create new student
// @route       POST /api/student
// @access      Public
exports.createStudent = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, dateOfBirth, phoneNumber, classID } = req.body;
  await client.query(
    `CALL public.insert_student($1,$2,$3,$4,$5)`,
    [firstName, lastName, dateOfBirth, phoneNumber, classID],
    (err, result) => {
      if (!err) res.status(200).json({ Data: [], Success: true, Message: "" });
      else res.status(500).json({ Data: [], Success: false, Message: "" });
    }
  );
});

// @desc        Update student information
// @route       PUT /api/student
// @access      Public
exports.updateStudent = asyncHandler(async (req, res, next) => {
  const { sid, firstName, lastName, dateOfBirth, phoneNumber, classID } =
    req.body;
  await client.query(
    `CALL public.update_student($1,$2,$3,$4,$5,$6)`,
    [sid, firstName, lastName, dateOfBirth, phoneNumber, classID],
    (err, result) => {
      if (!err) res.status(200).json({ Data: [], Success: true, Message: "" });
      else res.status(500).json({ Data: [], Success: false, Message: "" });
    }
  );
});

// @desc        Delete a student
// @route       Delete /api/student/:id
// @access      Public
exports.deleteStudent = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await client.query(`CALL public.delete_student($1);`, [id], (err, result) => {
    if (!err) res.status(200).json({ Data: [], Success: true, Message: "" });
    else res.status(500).json({ Data: [], Success: false, Message: "" });
  });
});
