const database = require("../database");
const Sequelize = require("sequelize");

async function isUserGood(username, password) {
  const json = [];
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
          json.push(element);
        });
      }
    });
  return json;
}

module.exports = {
  isUserGood,
};
