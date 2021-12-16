module.exports = (sequelize, Sequelize) => {
    const Photo = sequelize.define("photo", {
      ph_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      ph_img: {
        type: Sequelize.STRING
      },
      fk_pr: {
        type: Sequelize.INTEGER(12),
        zeroFilled: true
      }
    });
  
    return Photo;
}