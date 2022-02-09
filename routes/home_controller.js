//home contorller
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  console.log(req.path, req.method);
});

module.exports = router;
