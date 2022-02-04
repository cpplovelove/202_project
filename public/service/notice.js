const mysql = require("mysql2/promise");
const dbConnection =require('../../config/dbconfig')


exports.getContent = async function() {
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

