const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

//welcoming message on Home.
router.get("/", mainController.renderHome);


module.exports = router;