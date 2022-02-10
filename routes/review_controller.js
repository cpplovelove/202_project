//review contorller
//리뷰 어떻게 보여줄 것인지에 대
const applyService = require("../public/service/model/apply");
var express = require('express');
var router = express.Router();


router.get('/',async function(req,res){
    //해당 사용자가 방문한 기록이 있는지에 대해서 조회를 하고, 어떤 방문건에 대한 리뷰인지 선택할 수 있도록 할 것 
    //어떤 유저의 승인이 Y인 리스트를 조회, 해당 건에 대해 선택해서 리뷰를 작성하고 리뷰에 스케줄 id를 저장
    //리뷰 작성 전송 insert에서 이미 schedule에 존재하는 건일 경우에 reject이미 작성된 건입니다!!
    console.log(req.method, req.params)    
    
    console.log(req.cookies)
    if(!req.cookies.userId){res.render('main')}
    
    const userId = req.cookies.userId;
    result = await applyService.getContentByUserId(userId);
    let { reservation, count } = result;

    console.log(result)
    
    res.render('review',result)
});

module.exports = router;
