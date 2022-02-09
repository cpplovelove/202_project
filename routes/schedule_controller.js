//schedule contorller
//신청 및 예약현황을 위한 스케줄러
const applyService = require("../public/service/model/apply");
var express = require("express");
var router = express.Router();

router.post("/", async function (req, res) {
  console.log("schedule" + req.method, req.path);
  let resJson = { status: false };
  const { reservationDate, userName, userAge, activity } = req.body;
  req.body.userId = req.cookies.userId;

  console.log(req.body);

  if (!reservationDate || !userName || !userAge || !activity) {
    resJson.log = "데이터 채워주세요.";
  } else {
    //제대로 데이터가 들어왔을 경우
    result = await applyService.enrollApply(req, res);
    resJson.status = true;
    resJson.log = result + "건 예약 접수 완료";
  }

  res.send(resJson);
});

router.get("/", async function (req, res) {
  console.log("schedule" + req.method, req.path);
  res.render("schedule/apply");
});

router.get("/list", async function (req, res) {
  console.log("schedule" + req.method, req.path);
  res.render("schedule/list");
});

module.exports = router;
