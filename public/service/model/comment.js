const mysql = require("mysql2/promise");
const dbConnection = require("../../../config/dbconfig");
// const dbConnection =require('../../config/config');

 async function enrollComment(req,res) {
    const database = await mysql.createConnection(dbConnection);
    const comment= req.body.comment;
    const [rows] = await database.query(
      "insert into comment(comment) values(?)",
      [comment]
    );
    console.log("insert Log \n", rows);
    return rows.affectedRows;
}

function temp() {
    
}


module.exports={
    temp,
    enrollComment
}

