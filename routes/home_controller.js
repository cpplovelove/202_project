//home contorller
const commentService = require("../public/service/model/comment");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  console.log(req.path, req.method);
  res.render("home");
});

router.post("/enroll", async function (req, res) {
  console.log(req.path, req.method);
  let resJson = {
    status: false,
  };

  const result = await commentService.enrollComment(req, res);
  resJson.status = true;
  resJson.log = result + "건의 코멘트 전달 완료!\n감사합니당!!";
  res.send(resJson);
});

module.exports = router;
