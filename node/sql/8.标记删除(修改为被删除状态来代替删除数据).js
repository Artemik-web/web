//导入mysql模块
const mysql = require('mysql')
//建立与mysql数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的ip地址
    user: 'root', //登录数据库的账号
    password: 'admin123', //密码
    database: 'my_db_01'//指定要操作那个数据库
})

const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, res)=> {
    if(err) return console.log(err.message)
    if(res.affectedRows === 1){
        console.log('已标记删除')
    }
})