const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const Express =require ("express");
const path = require('path');
const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET, { sameSite: "none", secure: true }));
app.use(Express.static(path.join(__dirname, './public')));  

//routes
app.use('/', require('./routes/index'));
app.use('/home', require('./routes/home_controller'));
app.use('/users',require('./routes/user_controller'))
app.use('/notice',require('./routes/notice_controller'))
app.use('/schedule', require('./routes/schedule_controller'))
app.use('/review', require('./routes/review_controller'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.listen(process.env.PORT || 3000,()=>{
    console.log('3000번 포트에 server를 띄웠습니다.')
})

