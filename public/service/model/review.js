// review model service

const mysql = require("mysql2/promise");

const dbConnection = require("../../../config/dbconfig");
// const dbConnection =require('../../config/config');


async function enrollReview(req, res) {
  //예약 등록
  const database = await mysql.createConnection(dbConnection);
  const { reservationId, comment, revisit, activity, score, userId } = req.body;

  const [rows] = await database.query(
    "insert into review(userId,reservationId,comment,revisit,activity,score) values(?,?,?,?,?,?)",
    [userId, reservationId, comment, revisit, activity, score]
  );
  console.log("insert Log \n", rows);
  return rows.affectedRows;
}

async function temp() {
  
}

module.exports = {
  enrollReview,
  temp,
};
