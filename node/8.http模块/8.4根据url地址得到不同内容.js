//1.获取请求的url地址
//2.设置默认响应内容  404 Not Found
//3.判断用户请求的是否为/或者/index.html首页
//4.判断用户请求的是否为/about.html关于页面
//5.设置Content-Type响应头，防止中文乱码
//6.使用res.end()方法把内容响应给客户端
const http = require('http')

const server = http.createServer()

server.on('request', (req, res)=> {
    const url = req.url
    let content = '<h1>404 Not Found</h1>'
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>'
    }else if (url === '/about.html') {
        content = '<h1>关于</h1>'
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content)
    console.log(url)
})
server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1')
})