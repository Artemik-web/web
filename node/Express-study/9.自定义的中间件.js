//导入express模块
const express = require('express')
//导入querystring模块：专门用来处理查询字符串，通过这个模块提供的parse()函数,将字符串解析成对象格式
//node.js内置模块
const qs = require('querystring')
//创建express服务器实例
const app = express()

//这是解析表单数据的中间件
app.use((req, res, next)=>{
    //定义中间件具体的业务逻辑
    //1.定义一个str字符串，专门用来存储客户端发送过来的请求体数据
    let str = ''
    //2.监听req的data事件
    req.on('data', (chunk)=> {
        str += chunk
    })
    //3.监听req的end事件   (请求体发送完毕后自动触发)
    req.on('end', ()=> {
        //打印完整的请求体数据
        console.log(str)
        //把字符串格式的请求体数据，解析成对象格式
        //调用qs.parse()方法，把查询字符串解析成对象
        const body = qs.parse(str)
        req.body = body
        console.log(body) 
        next()
    })
   
})

app.post('/user', (req, res)=> {
    res.send(req.body)
})

//调用app.listen方法，指定端口号并启动服务器
app.listen(80, ()=> {
    console.log('express running at http://127.0.0.1')
})