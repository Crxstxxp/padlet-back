const express = require("express");

const router = express.Router();

const usersCtrl = require("../controllers/usersController");
const spacesCtrl = require("../controllers/spacesController");
const cardsCtrl = require('../controllers/cardsController');

router.post("/user/auth", usersCtrl.login);

router.post("/spaces", usersCtrl.verifyJWT, spacesCtrl.store);
router.get("/spaces", usersCtrl.verifyJWT, spacesCtrl.index);

router.post("/spaces/:id/cards", usersCtrl.verifyJWT, cardsCtrl.store);
router.get("/spaces/:id/cards", usersCtrl.verifyJWT, cardsCtrl.index);

module.exports = router;
