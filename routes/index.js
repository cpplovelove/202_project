const userService = require('../public/service/user')
var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
  res.render('main')
});

router.get('/home',function (req,res) {
  res.render('home')
})


router.get('/user/:userId',async function(req,res){
  const userId = req.params.userId;
  userResult = await userService.findUser(userId);
  const userData  = userResult;

  res.send(userData)
  });


module.exports = router;
