
const dbconnection = require("../database/dbConfig");
const { StatusCodes } = require("http-status-codes");

async function addanswer(req, res) {
    const { answer, questionid } = req.body;
    const { userid } = req.user;

    if (!answer) {
        return res.status(StatusCodes.BAD_REQUEST)
        .json({ msg: 'no answer provided'});
    } 


    try {
        await dbconnection.query(`SELECT * FROM questions WHERE questionid = ?`, [questionid,
        ]);
        await dbconnection.query(
            `INSERT INTO answers (userid, questionid, answer) VALUES (?,?,?)`,
            [userid, questionid, answer]
        );
        return res.status(StatusCodes.OK).json({msg: 'answer provided'});

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({msg: 'something went wrong, please try again later'});
    }   
}

async function allanswer(req, res) {
    const {questionid} = req.params
    try {
        const [answer] = await dbconnection.query(`SELECT * FROM answers where questionid=?`, [questionid]);
        if (answer.length == 0) {
            return res.status(StatusCodes.BAD_REQUEST)
            .json({msg: 'no answer'})
        }
        return res.status(StatusCodes.OK).json({answer});

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({msg: 'something went wrong, please try again later'});
    }
}




module.exports = { addanswer, allanswer };