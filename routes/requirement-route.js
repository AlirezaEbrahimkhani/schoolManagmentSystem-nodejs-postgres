const express = require("express");
const router = express.Router();
const { getGradeLevels } = require("../controller/requirement-controller");

router.get("/grade-level", getGradeLevels);

module.exports = router;
