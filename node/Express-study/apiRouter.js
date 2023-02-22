const express = require('express')

const router = express.Router()


//在这里挂载路由
router.get('/get', (req, res)=> {
    //通过 req.query 获取客户端通过查询字符串， 发送到服务器的数据
    const query = req.query
    //调用res.send() 方法，向客户端响应处理的结果
    res.send({
        status: 0, //0成功，1失败
        msg: 'GET 请求成功',//状态的描述
        data: query   // 需要响应给客户端的数据
    })
})


router.post('/post', (req, res)=> {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST 请求成功',
        data: body
    })
})

module.exports = router