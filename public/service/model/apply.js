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

async function temp() {}

module.exports = {
  enrollApply,
  temp,
};
