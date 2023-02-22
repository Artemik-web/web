//导入express模块
const express = require('express')

//创建express服务器实例
const app = express()

//配置解析表单数据的中间件
app.use(express.urlencoded({extended: false}))

//必须在配置cors中间件之前配置jsonp接口,否则功能是被cors覆盖的 
app.get('/api/jsonp', (req, res)=> {
    //jsonp接口具体的实现过程
    const fullName = req.query.callback
    //2.定义要发送客户端的数据对象
    const data = {name: 'artemik', age: 23}
    //3.拼接处一个函数的调用
    const scriptStr = `${fullName}(${JSON.stringify(data)})`
    //4.把拼接的字符串响应给客户端
    res.send(scriptStr)
})


//一定要在路由之前配置cors这个中间件，从而解决接口跨域的问题

const cors = require('cors')

app.use(cors())

//导入路由模块
const router = require('./apiRouter')

//全局注册路由模块
app.use('/api', router)


//调用app.listen方法，指定端口号并启动服务器
app.listen(80, ()=> {
    console.log('express server running at http://127.0.0.1')
})