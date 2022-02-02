const userService = require("../public/service/user");
var express = require("express");
var router = express.Router();
var isLoged = false;

router.get("/", function (req, res) {
  console.log(req.path, req.method);

  if (!isLoged) {
    res.render("main");
  } else res.render("home");
});

router.get("/user/:userId", async function (req, res) {
  const userId = req.params.userId;
  userResult = await userService.findUser(userId);
  const userData = userResult;

  res.send(userData);
});

router.get("/home", function (req, res) {
  console.log(req.path, req.method);
  isLoged = true;
  res.render("home");
});

module.exports = router;
