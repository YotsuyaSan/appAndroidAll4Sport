module.exports = (sequelize, Sequelize) => {
    const Fournisseur = sequelize.define("fournisseur", {
      fo_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fo_libelle: {
        type: Sequelize.STRING
      }
    });
  
    return Fournisseur;
}