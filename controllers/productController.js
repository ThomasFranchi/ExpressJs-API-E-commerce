
const productList = require('../data/productsList.json')

const productController = {
    getProductList : (req, res) => {
        res.json(productList)
    },

    postCustomerOrder : (req, res) => {
        console.log(req.body)
        res.json("Votre commande est acceptée, vous serez averti de son expédition lors d'un prochain message.")
    }
};

module.exports = productController;