const noticeService = require("../public/service/model/notice");
const userService = require("../public/service/model/user");
var express = require("express");
var router = express.Router();
const pageLimit = 5;

router.get("/", async function (req, res) {
  res.redirect("/notice/1");
});

router.get("/:page", async function (req, res) {
  console.log(req.path, req.method);
  //게시글 조회 5
  const noticeResult = await noticeService.getContent();
  const entireNotice = noticeResult.noticeList;
  const count = noticeResult.count;

  const page = req.params.page;
  let offset = (page - 1) * 5; //startIndex
  let limit = offset + 5; //endIndex
  let noticeList = [];

  if (count < limit) limit = count;
  for (let i = offset; i < limit; i++) {
    noticeList.push(entireNotice[i]);
  }

  let pageNum = Math.floor(noticeResult.count / pageLimit);
  if (count % pageLimit != 0) pageNum += 1;

  let resJson = {
    page: pageNum, //전체 페이지
    noticeList: noticeList,
    offset: offset,
    limit: limit,
  };
  res.render("notice/notice", resJson);
});

router.get("/content/:id", async function (req, res) {
  console.log(req.path, req.method);
  //게시물을 보여줄 것
  const contentId = req.params.id;
  const noticeList = await noticeService.getContentById(contentId);

  const userResult = await userService.findUserById(noticeList[0].userId);

  const userName = userResult.name;
  const resJson = { noticeList, userName };
  res.render("notice/notice_content", resJson);
});

module.exports = router;
