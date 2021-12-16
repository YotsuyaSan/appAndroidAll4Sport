module.exports = (sequelize, Sequelize) => {
    const Rayon = sequelize.define("rayon", {
      rayon_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      rayon_libelle: {
        type: Sequelize.STRING
      }
    });
  
    return Rayon;
}