const express = require('express')

const app = express()

//监听客户端的get和post请求，并向客户端响应具体的内容
app.get('/user', (req, res)=>{
    //调用express提供的res.end()方法，向客户端响应一个Jason对象
    res.send({ name: 'artemik', age: 20, gender: '男'})
})
//获取url中客户端查询传递的参数(静态参数)
//http://127.0.0.1/?name=artemik&age=23
app.get('/', (req, res)=>{
    console.log(req.query)//默认为空
})
//获取url中客户端查询传递的参数(动态参数)
//http://127.0.0.1/user/:id
app.get('/user/:id', (req, res)=> {
    console.log(req.params)
})


app.post('/user', (req, res)=>{
    res.send('请求成功')
})
app.listen(80, () => {
    console.log('express running at http://127.0.0.1')
})