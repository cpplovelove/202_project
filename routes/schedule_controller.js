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
  res.redirect('list/1')
});

router.get("/list/:page", async function (req, res) {
  console.log("schedule" + req.method, req.path);
  const page = req.params.page;
  let offset = (page-1)*5;
  let limit = offset+5;


  result = await applyService.getContent(req,res);
  let { reservation, count } = result;
  let reserveList = []
  

  if(count<limit) limit =count;
  for (let i =offset; i<limit; i++){
    reserveList.push(reservation[i])
  }

  const pageLimit= 5;
  let pageNum = Math.floor(count/pageLimit)
  if(count % pageLimit !=0 ) pageNum+=1;  
  
  let resJson = {
    page: pageNum,
    reserveList,
    offset,
    limit
  }
  res.render("schedule/list", resJson);
});

router.post('/approve',async function (req,res) {
  console.log(req.path, req.method);
  //   업데이트해주기
  const {isApproved, reservationId} =req.body;
  const result = await applyService.updateReservation(reservationId,isApproved);
 
  let resJson = {} 
  resJson.log = result + "건 업데이트 완료";
  res.send(resJson)
});

module.exports = router;
