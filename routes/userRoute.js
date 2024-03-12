const express = require('express')
const router = express.Router()


// import user controllers
const { register, login, checkUser } = require('../controller/userController')


// register route
router.post("/register", register);

// login route
router.post("/login", login);


//chech user route
router.get("/check", checkUser);

module.exports = router

