module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define("section", {
      se_id: {
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
      }
    });
  
    return Section;
}