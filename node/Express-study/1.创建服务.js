//导入express
const express = require('express')
//创建 web 服务器实例
const app = express()
//启动 web 服务器
app.listen(80,() => {
    console.log('express running at http://127.0.0.1')
})