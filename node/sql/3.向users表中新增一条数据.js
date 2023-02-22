//导入mysql模块
const mysql = require('mysql')
//建立与mysql数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的ip地址
    user: 'root', //登录数据库的账号
    password: 'admin123', //密码
    database: 'my_db_01'//指定要操作那个数据库
})



const newAddUser = {username: 'ztl', password: 'artemik'}
//定义待执行的mysql语句
const sqlStr = 'insert into users (username, password) value(?, ?)'
//执行sql语句
db.query(sqlStr, [newAddUser.username, newAddUser.password], (err, res)=> {
    if(err) return console.log(err.message)//失败
    if(res.affectedRows === 1){
        console.log('写入新用户成功')
    }
    
})