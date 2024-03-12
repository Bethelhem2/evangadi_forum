// db connection
const dbconnection = require("../database/dbConfig");

async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!username || !firstname || !lastname || !email || !password) {
    return res.json({ msg: 'Please provide all required fiels'})
  }
  res.send("register");
}

async function login(req, res) {
  res.send("login");
}

async function checkUser(req, res) {
  res.send("check Use");
}

module.exports = { register, login, checkUser };
