//导入mysql模块
const mysql = require('mysql')
//建立与mysql数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的ip地址
    user: 'root', //登录数据库的账号
    password: 'admin123', //密码
    database: 'my_db_01'//指定要操作那个数据库
})

//演示如何更新用户信息
const user = {id: 6, username: 'aaa', password: '000'}
//定义sql语句
const sqlStr = 'update users set username=?, password=? where id=?'
//执行sql语句
db.query(sqlStr, [user.username, user.password, user.id], (err,res)=> {
    if(err) return console.log(err.message)
    if(res.affectedRows === 1) {
        console.log('执行成功')
    }
})