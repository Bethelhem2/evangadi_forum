const dbconnection = require("../database/dbConfig");
const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");

async function askquestion(req, res) {
  const { title, description, tag } = req.body;
  const questionid = uuidv4();
  const userid = req.user.userid; // extracted from middleware token
  if (!title || !description) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please enter all required fields" });
  }
  try {
    await dbconnection.query(
      "INSERT INTO questions(questionid, userid, title, description, tag) VALUES(?,?,?,?,?)",
      [questionid, userid, title, description, tag]
    );
    return res.json("question added");
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "something went wrong" });
  }
}

async function allquestion(req, res) {
  try {
    const [questions] = await dbconnection.query(
      `SELECT q.id, q.questionid, q.userid, q.title, q.tag, u.username FROM questions q INNER JOIN users u ON q.userid = u.userid ORDER BY q.id DESC `
    );
    if (questions.length == 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "please enter all the required fields" });
    }
    return res.status(StatusCodes.OK).json({ questions });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "something went wrong" });
  }
}
async function singlequestion(req, res) {
  const { questionid } = req.params;
  try {
    const query = `SELECT * FROM questions WHERE questionid = ?`;
    const [question] = await dbconnection.query(query, [questionid]);
    if (question.length == 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Question not found" });
    }
    return res.status(StatusCodes.OK).json(question[0]);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
}

module.exports = { askquestion, singlequestion, allquestion };
