const database = require("../database");
const Sequelize = require("sequelize");

async function isUserGood(username, password) {
  var token = null;
  await database.db.database
    .query(
      "SELECT id FROM users WHERE us_login = :username AND us_mdp = :password",
      {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
          username: username,
          password: password,
        },
      }
    )
    .then((res) => {
      if (res.length == 1) {
        res.forEach((element) => {
          token = element.id;
        });
      } else {
        return token;
      }
    });
  return token;
}

module.exports = {
  isUserGood,
};
