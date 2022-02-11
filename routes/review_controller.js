//review contorller
//리뷰 어떻게 보여줄 것인지에 대
const reviewService = require("../public/service/model/review");
const applyService = require("../public/service/model/apply");
var express = require("express");
var router = express.Router();



router.get('/',async function(req,res){
    //해당 사용자가 방문한 기록이 있는지에 대해서 조회를 하고, 어떤 방문건에 대한 리뷰인지 선택할 수 있도록 할 것 
    //어떤 유저의 승인이 Y인 리스트를 조회, 해당 건에 대해 선택해서 리뷰를 작성하고 리뷰에 스케줄 id를 저장
    //리뷰 작성 전송 insert에서 이미 schedule에 존재하는 건일 경우에 reject이미 작성된 건입니다!!
    console.log(req.method, req.params)    
    if (!req.cookies.userId) {
        //userId가 없을 경우
        console.log("it doesnt have userId");
        res.render("main");}
         
    const userId = req.cookies.userId;
    result = await applyService.getContentByUserId(userId);
    let { reservation, count } = result;

    res.render('review',result)
});

router.post("/", async function (req, res) {
  let resJson = {status: false} 
  console.log(req.method, req.params);
  
  
  const { reservationId, comment, revisit, activity, score } = req.body;
  req.body.userId = req.cookies.userId;

  console.log(req.body)

  if (!req.cookies.userId) {
    //userId가 없을 경우
    console.log("it doesnt have userId");
    res.render("main");
  } else if (!reservationId || !comment || !revisit || !activity || !score) {
    //데이터가 제대로 드렁오지 않았을 경우
    resJson.log = "데이터 채워주세요.";
  } else {
    //제대로 데이터가 들어왔을 경우
    result = await reviewService.enrollReview(req, res);
    resJson.status = true;
    resJson.log = result + "건 리뷰 작성 완료";
  }

  res.send(resJson);
});

module.exports = router;
