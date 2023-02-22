//导入mysql模块
const mysql = require('mysql')
//建立与mysql数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的ip地址
    user: 'root', //登录数据库的账号
    password: 'admin123', //密码
    database: 'my_db_01'//指定要操作那个数据库
})

//删除id为5的用户 db.query第二个参数数组可以省略，只有一个占位符？时
const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 5, (err,res)=> {
    if(err) return console.log(err.message)
    if(res.affectedRows === 1){
        console.log('删除成功')
    }
})