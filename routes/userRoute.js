const express = require("express");
const router = express.Router();

// authentication middleware
const authMiddleware = require('../middleware/authMiddleware')

// import user controllers
const { users, login, checkUser } = require("../controller/userController");

// register route
router.post("/users", users);

// login route
router.post("/login", login);

// //chech user route
router.get("/check", authMiddleware, checkUser);
 
module.exports = router;
