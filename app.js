const Express =require ("express");
const app = Express();

app.get('/',(req,res)=>{
    res.send('init page')
});

app.listen(3000,()=>{
    console.log('3000번 포트에 server를 띄웠습니다.')
})
 