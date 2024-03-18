const express = require("express");
const router = express.Router();

// import answerControllers

const {
  addanswer,
  allanswer,
} = require("../controller/answerController");

router.post("/addanswer/:questionid", addanswer);
router.get("/allanswer", allanswer);

module.exports = router;
