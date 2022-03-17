const express = require("express");
const { isUserGood } = require("../controllers/user.controller");
const router = express.Router();

router.route("/user/:username/pswd/:password").get((req, res) => {
  isUserGood(req.params.username, req.params.password).then((token) => {
    res.send([{ token: token }]);
  });
});

module.exports = router;
