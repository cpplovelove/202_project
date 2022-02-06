//schedule contorller
//신청 및 예약현황을 위한 스케줄러
var express = require('express');
var router = express.Router();



router.post('/',async function(req,res){
    console.log(req.body)
});


router.get('/',async function(req,res){
    console.log('schedule'+req.method, req.path);
    res.render('schedule/apply')
});

router.get('/list',async function(req,res){
    console.log('schedule'+req.method, req.path);
    res.render('schedule/list')
});
  

 module.exports = router;
