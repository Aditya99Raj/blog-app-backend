const express = require('express');
const router  = express.Router();
require("dotenv").config();
const getAllUsers= require("../controllers/user.controller");
const Signup = require("../controllers/user.controller");


router.get('/',getAllUsers);
router.post("/signup",Signup)
module.exports = router