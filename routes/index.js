const mysql =require('mysql')
const dbConnection =require('../dbconfig')
var express = require('express');
var router = express.Router();

const database = mysql.createConnection(dbConnection);

router.get('/', function(req,res){
  // res.redirect('/users')
  res.render('main')
});

router.get('/users',(req,res)=>{
  database.query('select * from user',(error,rows)=>{
    if(error) console.log(error)
    console.log('\nuserInfo : ',rows)
    res.send(rows)
  })
})

module.exports = router;
