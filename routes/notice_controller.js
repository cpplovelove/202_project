const noticeService = require('../public/service/notice');
const userService = require('../public/service/user');
var express = require('express');
var router = express.Router();
const pageLimit=5;

router.get('/',async function(req,res){ //이건 결국 0에서 시작하는거임
    res.redirect('/notice/1')
});
  
router.get('/:page',async function(req,res){
    console.log(req.path,req.method)
    //page들고올 거임..5개씩 보여주자    //1page, 2page, 3page-> 0-4/5-9/
    const noticeResult = await noticeService.getContent(); 
    const entireNotice = noticeResult.noticeList;
    const count= noticeResult.count;

    const page = req.params.page;
    let offset= (page-1)*5; //startIndex
    let limit=offset+5; //endIndex
    let noticeList=[];
    
    if(count<limit) limit=count;
    for( let i=offset; i<limit; i++){
        noticeList.push(entireNotice[i]);
    }
    
    let pageNum=Math.floor(noticeResult.count/pageLimit);
    if(count%pageLimit!=0)pageNum+=1;

    let resJson={
        page: pageNum,  //전체 페이지
        noticeList : noticeList,
        offset: offset,
        limit:limit
    }
    res.render('notice/notice',resJson)
});

router.get('/content/:id',async function (req,res) {
    console.log(req.path,req.method)
    //게시물을 보여줄 것
    const contentId = req.params.id;
    const noticeList = await noticeService.getContentById(contentId); 
    console.log(noticeList[0].userId)
    console.log(noticeList.userId)
    const userResult = await userService.findUserById(noticeList[0].userId);

    
    console.log(noticeList)
    console.log('\n\n\n특정게시글!!')
    console.log(userResult)
    
    const userName = userResult.name;
    const resJson = {noticeList, userName}
    res.render('notice/notice_content',resJson);
})
  

    module.exports = router;
