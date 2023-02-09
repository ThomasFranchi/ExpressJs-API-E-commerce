const express = require("express");
const router = express.Router();
const resellerController = require("../controllers/resellerController")

// Display in the console the Json posted by the client
router.post("/product", resellerController.postOrder );

// Display in the console the Json posted by the client
router.put("/product", resellerController.putProduct);

router.delete("/product", resellerController.deleteProduct );

module.exports = router;