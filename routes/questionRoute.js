const express = require("express");
const router = express.Router();

// import questionControllers

const {
  askquestion,
  singlequestion,
  allquestion,
} = require("../controller/questionController");

router.post("/askquestion", askquestion);
router.get("/singlequestion/:questionid", singlequestion);
router.get("/allquestion", allquestion);

module.exports = router;
