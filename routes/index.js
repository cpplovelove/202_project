const userService = require("../public/service/model/user");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  console.log(req.path, req.method);

  if (!req.cookies.isLoged) {
    res.render("main");
  } else {
    res.render("home");
    isLoged = false;
  }
});

router.post("/login", async function (req, res) {
  console.log(req.path, req.method);
  const { id, password } = req.body;
  userResult = await userService.findUserByIdString(id);
  const userData = userResult[0];

  if (userData.userId == id && userData.userPass == password) {
    //id password 일치
    res.cookie("isLoged", true);
    res.cookie("userId", id);
    res.render("home");
  } else res.render("main", false);
});

module.exports = router;
