const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

db.query('select 1', (err, res)=> {
    if(err) return console.log(err.message)

    console.log(res)
})

const sqlStr = 'select * from users'
db.query(sqlStr, (err, res)=> {
    if(err) return console.log(err.message)
    console.log(res)
})
//结果
// [
//     RowDataPacket {
//       id: 2,
//       username: 'ls',
//       password: 'admin123',
//       status: 1
//     },
//     RowDataPacket {
//       id: 3,
//       username: 'xh',
//       password: '654321',
//       status: 0
//     },
//     RowDataPacket {
//       id: 4,
//       username: 'nick',
//       password: 'qwer123',
//       status: 0
//     },
//     RowDataPacket {
//       id: 5,
//       username: 'artemik',
//       password: 'zhou20000322',
//       status: 0
//     }
//   ]
  