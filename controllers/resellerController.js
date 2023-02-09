const resellerController = {
   postOrder :(req, res) => {
    console.log(` 
    ${req.body.vendeur} 
    ${req.body.vendeurAdresse} 
-----------------------------------------------------------
    destinataire : ${req.body.nom} ${req.body.prenom} 
    
    commande : ${req.body.articles}
-----------------------------------------------------------`);
    res.json("confirmation !")
},

    putProduct :   (req, res) => {
        console.log(req.body);
        res.json("Modification(s) prise(s) en compte !");
    },

    deleteProduct: (req, res) => {
        console.log(req.body);
        res.json("Suppression(s) effectuée(s)!");
    }
};

module.exports = resellerController;