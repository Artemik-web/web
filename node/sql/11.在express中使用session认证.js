const express = require('express')
const app = express()

//配置 express-session中间件
var session = require('express-session')

app.use(session({
    secret: 'keyboard cat',//secret 属性的值可以为任意字符串
    resave:  false, //固定写法
    saveUninitialized: true  //固定写法
}))


//登录接口
app.post('/api/login', (err,req)=>{
    //判断用户提交的登陆信息是否正确
    if(req.body.username != 'admin' || req.body.password != '000000'){
        return res.send({status: 1, msg: '登陆失败'})
    }
    req.session.user = req.body //将用户1信息存到session中
    req.session.islogin = true //将用户的登陆状态存储到session中

    res.send({status: 0, msg: '登陆成功'})
})


//获取用户姓名
app.get('/api/username', (req, res)=> {
    if(!req.session.islogin){
        return res.send({sattus: 1, msg: 'fail'})
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username,
    })
})



//清空session(退出登陆时)
app.post('/api/logout', (req, res)=> {
    //清空当前客户端对应的session信息
    req.session.destory()
    res.send({
        status: 0,
        msg: '退出登陆成功'
    })
})





app.listen(80, ()=>{
    console.log('express running at http://127.0.0.1')
})
