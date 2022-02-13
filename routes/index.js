const userService = require("../public/service/model/user");
const commentService = require("../public/service/model/comment");

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

  if(!userData){
    let resJson = { log : "해당 id가 존재하지 않습니다. 다시 시도해주세요!"}
    res.send(resJson)
  }else if (userData.userId == id && userData.userPass == password) {
    //id password 일치
    res.cookie("isLoged", true);
    res.cookie("userId", userData.id);
    res.render("home");
  } else res.render("main", false);
});

router.post("/signin", async function (req, res) {
  console.log(req.path, req.method);
  let resJson={ status : false }
  const { id, password, name, checkPassword } = req.body;

  console.log (req.body)

  if (!id || !password || !name||!checkPassword ) {
    resJson.log = "데이터 채워주세요.";
    res.send(resJson);
  }else if(password!=checkPassword){
    resJson.log = "비밀번호 확인이 일치하지 않습니다.";
    res.send(resJson);
  } 
  else {
    //제대로 데이터가 들어왔을 경우
    userResult = await userService.enrollUser(req,res);
    resJson.status = true;
    resJson.log = "["+ name + "]님 회원가입 완료";
    res.send(resJson);
  }

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
