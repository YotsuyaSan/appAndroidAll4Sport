const database = require("../database");
const Sequelize = require("sequelize");

async function getAllProducts() {
  const json = [];
  await database.db.database
    .query("SELECT * FROM produits", {
      type: Sequelize.QueryTypes.SELECT,
    })
    .then((res) => {
      res.forEach((product) => {
        json.push(product);
      });
    });
  return json;
}

async function getProductByRef(ref) {
  const json = [];
  await database.db.database
    .query("SELECT * FROM produits WHERE pr_reference = :refProduit", {
      type: Sequelize.QueryTypes.SELECT,
      replacements: {
        refProduit: ref,
      },
    })
    .then((res) => {
      if (res.length == 1) {
        res.forEach((element) => {
          json.push(element);
        });
      }
    });
  return json;
}

module.exports = {
  getAllProducts,
  getProductByRef,
};
