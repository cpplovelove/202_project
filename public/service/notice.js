const mysql = require("mysql2/promise");
const dbConnection =require('../../config/dbconfig')
// const dbConnection =require('../../config/config');


async function getContent() {
  //게시판 전체 게시물 조회 ( id, title, content, userId, count ) 
  const database = await mysql.createConnection(dbConnection);
  const query = "select * from board order by updateDate desc";

  const [noticeList] = await database.query(query);
  const count = noticeList.length;
  let resJson ={
      noticeList, count
  }
  return resJson;
}

async function getContentById(id) {
    //특정 게시물 조회 ( id, title, content, userId, count ) 
    const database = await mysql.createConnection(dbConnection);
    const query = "select * from board where id= order by updateDate desc";
  
    const [noticeList] = await database.query("select * from board where id=? order by updateDate desc",[id]);

    return noticeList;  
}

module.exports={getContent, getContentById}