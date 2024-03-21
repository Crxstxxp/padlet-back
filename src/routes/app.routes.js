const express = require("express");

const router = express.Router();

const usersCtrl = require('../controllers/usersController')
const spacesCtrl = require('../controllers/spacesController');

router.post("/user/auth", usersCtrl.login);

router.post('/spaces', usersCtrl.verifyJWT, spacesCtrl.store)


module.exports = router