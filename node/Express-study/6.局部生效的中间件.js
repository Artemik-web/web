const express = require('express')

const app = express()

const m1 = function(req, res, next){
    console.log('你经过了m1这个局部的中间件')
    next()
}
//m1只在当前路由中生效
//定义多个局部中间件时，可以直接在m1后面加，或者把m1改成[m1,m2,...]这种形式
app.get('/', m1, (req, res)=>{
    res.send('artemik真帅')
})

app.listen(80, () => {
    console.log('express running at http://127.0.0.1')
})