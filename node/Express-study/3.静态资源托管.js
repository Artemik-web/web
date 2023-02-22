const express = require('express')
const app = express()

// app.use(express.static('../7.path/pack'))

//托管多个静态资源
//如果要托管多个静态资源目录，需要多次调用express.static()函数
//访问静态资源文件时，express.static()函数会根据目录的添加顺序查找所需的文件

app.use(express.static('../7.path/a'))
app.use(express.static('../7.path/pack'))

//挂载路径前缀
app.use('/a', express.static('../7.path/a'))
app.use('/pack', express.static('../7.path/pack'))

app.listen(80, ()=> {
    console.log('express running at http://127.0.0.1')
})