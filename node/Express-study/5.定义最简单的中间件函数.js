const express = require('express')

const app = express()
//无next为路由处理函数，有next形参且需要调用的是中间件函数
const mv = function (req, res, next) {
    console.log('这是最简单的中间件函数')
    //把流转关系转交给下一个中间件或者路由
    next()
}

app.use(mv)//全局注册mv这个中间件，全局生效的中间件接收到的任何请求都会经过这个中间件

app.get('/', (req, res)=>{
    res.send('get')
})
app.post('/user', (req, res)=>{
    res.send('post')
})

app.listen(80, ()=>{
    console.log('express running at http://127.0.0.1')
})

//中间件流转过程中可以为req和res赋值，后面的中间件和路由都可以取到前面定义的数据方法