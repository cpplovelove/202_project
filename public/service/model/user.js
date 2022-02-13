const mysql = require("mysql2/promise");
const dbConnection = require("../../../config/dbconfig");
// const dbConnection =require('../../config/config');

async function getUsers() {
  const database = await mysql.createConnection(dbConnection);
  //전체 유저 조회
  const [rows] = await database.query("select * from user", (error, rows) => {
    if (error) console.log(error);
    console.log("\nuserInfo : ", rows);
    res.send(rows);
  });
}

async function findUserByIdString(id) {
  const database = await mysql.createConnection(dbConnection);
  let resJson = {};
  const query = `select * from user where userId='${id}'`;
  console.log("query = ", query);

  const [rows] = await database.query(query);

  return rows;
}

async function findUserById(id) {
  const database = await mysql.createConnection(dbConnection);
  let resJson = {};
  const query = `select * from user where id='${id}'`;
  console.log("query = ", query);

  const [rows] = await database.query(query);

  return rows;
}

async function enrollUser(req, res) {
  //예약 등록
  const database = await mysql.createConnection(dbConnection);
  const { id,name,password } = req.body;

  const [rows] = await database.query(
    "insert into user(userId, userPass, name) values(?,?,?)",
    [id,password,name]
  );
  console.log("insert Log \n", rows);
  return rows.affectedRows;
}

module.exports = {
  findUserByIdString,
  findUserById,
  getUsers,
  enrollUser
};
