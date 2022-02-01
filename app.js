const Express =require ("express");
const routes = require('./routes');
const path = require('path');
const app = Express();


app.use('/', routes);
app.use('/', Express.static(path.join(__dirname, './public')));  

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.listen(process.env.PORT || 3000,()=>{
    console.log('3000번 포트에 server를 띄웠습니다.')
})

