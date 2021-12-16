module.exports = (sequelize, Sequelize) => {
    const Etagere = sequelize.define("etagere", {
      et_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
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
      }
    });
  
    return Etagere;
}