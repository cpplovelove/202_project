const mysql = require("mysql2/promise");

const dbConnection = require("../../../config/dbconfig");
// const dbConnection =require('../../config/config');

async function enrollApply(req, res) {
  //예약 등록
  const database = await mysql.createConnection(dbConnection);
  const {
    reservationDate: reserveDate,
    userId,
    userName,
    userAge,
    activity,
  } = req.body;

  const [rows] = await database.query(
    "insert into reservation(userId,reserveDate,name,age,reason) values(?,?,?,?,?)",
    [userId, reserveDate, userName, userAge, activity]
  );
  console.log("insert Log \n", rows);
  return rows.affectedRows;
}

async function getContent() {
  //예약 전체 게시물 조회 ( id, userId, isApproved, reserveDate, name, age, reason, isDel )
  const database = await mysql.createConnection(dbConnection);
  const query = "select * from reservation order by updateDate desc";

  const [reservation] = await database.query(query);
  const count = reservation.length;
  let resJson = {
    reservation,
    count,
  };
  return resJson;
}

async function getContentByUserId(userId) {
  //예약 전체 게시물 조회 ( id, userId, isApproved,isReviewed reserveDate, name, age, reason, isDel )
  const database = await mysql.createConnection(dbConnection);
  const query = "select * from reservation where userId="+userId+" and isApproved='Y' and isReviewed='N' order by updateDate desc";

  const [reservation] = await database.query(query);
  const count = reservation.length;

  let resJson = {
    reservation,
    count,
  };
  return resJson;
}

async function updateReservation(reseravtionId, isApproved) {
  //예약 승인 여부 업데이트 
  const database = await mysql.createConnection(dbConnection);
  

  const query = "update reservation set isApproved='"+isApproved+"' where id="+reseravtionId;
  const [rows] = await database.query(query);
  console.log("update Log \n", rows);
  return rows.affectedRows;
}


async function updateIsReviewed(reseravtionId) {
  //예약 승인 여부 업데이트 
  const database = await mysql.createConnection(dbConnection);
  
  const query = "update reservation set isReviewed='Y' where id="+reseravtionId;
  const [rows] = await database.query(query);
  console.log("update Log \n", rows);
  return rows.affectedRows;
}

module.exports = {
  enrollApply,
  getContent,
  getContentByUserId,
  updateReservation,
  updateIsReviewed
};
