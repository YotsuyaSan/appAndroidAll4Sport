module.exports = (sequelize, Sequelize) => {
    const Module = sequelize.define("module", {
      mo_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fk_ba: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  
    return Module;
}