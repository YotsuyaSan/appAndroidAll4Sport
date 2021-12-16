module.exports = (sequelize, Sequelize) => {
    const Rangee = sequelize.define("rangee", {
      ra_id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      fk_ba: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fk_mo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  
    return Rangee;
}