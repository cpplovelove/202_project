const mysql =require('mysql2/promise')
const dbConnection =require('../../config/dbconfig')


    async function getUsers(){
        const database = await mysql.createConnection(dbConnection);
        //전체 유저 조회
        const [rows] = await database.query('select * from user',(error,rows)=>{
            if(error) console.log(error)
            console.log('\nuserInfo : ',rows)
            res.send(rows)
        })
    }
  
    async function findUser(id){
        const database = await mysql.createConnection(dbConnection);
        let resJson = { }; 
        const query = `select * from user where userId='${id}'`;
        console.log('query = ', query);

        const [rows] = await database.query(query);

        return rows;
    }


    module.exports={
        findUser,
        getUsers
    }
