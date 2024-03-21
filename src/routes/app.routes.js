const express = require("express");

const router = express.Router();

const usersCtrl = require("../controllers/usersController");
const spacesCtrl = require("../controllers/spacesController");
const cardsCtrl = require("../controllers/cardsController");

router.post("/user/auth", usersCtrl.login);
/**
 * {
  "nombre": "criss",
  "password": "123"
}
 */

//Crear espacios de trabajo (sidebar)
router.post("/spaces", usersCtrl.verifyJWT, spacesCtrl.store);
/**
 * {
 *  "name": "nombre ejemplo"
 * }
 */
//Obtener los espacios de trabajo (sidebar)
router.get("/spaces", usersCtrl.verifyJWT, spacesCtrl.index);

//Crear las cartas de un espacio de trabajo por spaceId
router.post("/spaces/:id/cards", usersCtrl.verifyJWT, cardsCtrl.store);
/**
 * formData()
 * {
 *  "title": "ejemplo titulo",
 *  "description": "ejemplo desc"
 *      file: archivo
 * }
 */
//Obtener las cartas de un espacio de trabajo spaceId
router.get("/spaces/:id/cards", usersCtrl.verifyJWT, cardsCtrl.index);

/**
 * ex: /spaces/1/cards
 */

module.exports = router;
