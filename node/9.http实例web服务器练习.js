const fs = require('fs')
const path = require('path')
const http = require('http')

//创建web服务器
const server = http.createServer()
//监听服务器request事件
server.on('request', (req, res) => {
    const url = req.url
    // const method = req.method
    //  文件名带中文无法访问
    
    //这样写无论用户输入的是/（即什么都没有输入）还是1.html，都会自动为用户补齐中间路径到1.html（首页  ）
    let fpath = ''
    if(url === '/'){
        fpath = path.join(__dirname, './7.path/pack/1.html')
    }else{
        fpath = path.join(__dirname,'/7.path/pack',url)
    }
    //  fpath = path.join(__dirname, url)
    console.log(fpath)
    fs.readFile(fpath, 'utf8', (err,dataStr) => {
        if(err) return res.end('404 Not Found')
        res.end(dataStr)
    })
})
//启动web服务器
server.listen(80, ()=> {
    console.log('server running at http://127.0.0.1')
})