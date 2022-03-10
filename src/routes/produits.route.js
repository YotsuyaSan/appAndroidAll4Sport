const express = require("express");
const {
  getAllProducts,
  getProductByRef,
} = require("../controllers/produit.controller");
const router = express.Router();
const produits = require("../models/produit.model");

router.route("/").get((req, res) => {
  getAllProducts().then((produits) => res.send(produits));
});

router.route("/get/:refProduit").get((req, res) => {
  getProductByRef(req.params.refProduit).then((produit) => {
    console.log(produit);
    res.send(produit);
  });
});

module.exports = router;
