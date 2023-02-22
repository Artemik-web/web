const express = require('express')
const app = express()

    //注意除了错误中间件，其他的中间件都要写在路由之前，
    app.use(express.json())

    app.post('/user', (req,res)=>{
        //在服务器使用req.body这个属性来接受客户端发送过来的请求体数据
        //默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
        console.log(req.body)
        res.send('ok')

    })

    //通过express.urlencoded()这个中间件，来解析表单中的url-encoded格式数据
    app.use(express.urlencoded({extended: false}))
    app.post('/book', (req, res)=>{
        console.log(req.body)
        res.send('OK')
    })


app.listen(80, ()=>{
    console.log('express running at http://127.0.0.1')
})