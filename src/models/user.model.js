module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      us_login: {
        type: Sequelize.STRING
      },
      us_mdp: {
        type: Sequelize.STRING
      },
      us_nom: {
        type: Sequelize.STRING
      },
      us_prenom: {
        type: Sequelize.STRING
      },
      us_email: {
        type: Sequelize.STRING
      },
      us_telephone: {
        type: Sequelize.STRING
      }
    });
  
    return User;
}