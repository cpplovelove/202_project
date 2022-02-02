const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const Express =require ("express");
const path = require('path');
const app = Express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET, { sameSite: "none", secure: true }));
app.use(Express.static(path.join(__dirname, './public')));  

//routes
app.use('/', require('./routes/index'));
app.use('/users',require('./routes/user_controller'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.listen(process.env.PORT || 3000,()=>{
    console.log('3000번 포트에 server를 띄웠습니다.')
})

