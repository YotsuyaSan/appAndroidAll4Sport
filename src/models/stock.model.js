module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define("stock", {
      st_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nb_produit: {
        type: Sequelize.INTEGER
      },
      fk_ba: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fk_mo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fk_ra: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      fk_se: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fk_et: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fk_pr: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  
    return Stock;
}