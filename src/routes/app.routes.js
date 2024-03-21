const express = require("express");

const router = express.Router();

const usersCtrl = require('../controllers/usersController')

router.post("/user/auth", usersCtrl.login);


module.exports = router