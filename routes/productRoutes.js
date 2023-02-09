const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController")

//Get list and Respond with productList json
router.get("/list", productController.getProductList )

// Display in console the Json posted from client and RES the Json with the order confirmed.
router.post("/shop", productController.postCustomerOrder )

module.exports = router;