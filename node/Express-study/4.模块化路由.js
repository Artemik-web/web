const express = require('express')

const app = express()
//导入路由模块
const userRouter = require('./router')
//注册路由模块
app.use(userRouter)
//注意 app.use()函数的作用，就是来注册全局中间件
// app.use('/api', userRouter)  加前缀
app.listen(80, ()=>{
    console.log('express running at http://127.0.0.1')
})