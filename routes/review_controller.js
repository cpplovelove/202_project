//review contorller
//리뷰 어떻게 보여줄 것인지에 대한
var express = require('express');
var router = express.Router();


router.post('/',async function(req,res){
    console.log(req.method, req.params)
    res.render('review')
});

module.exports = router;
