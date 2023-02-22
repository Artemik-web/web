const http = require('http')

const server = http.createServer()

server.on('request', (req, res)=> {
    const url = req.url
    const method = req.method
    const str = `你请求的地址是${url},你请求的方法是${method}`
    console.log(str)

    //手动设置end返回内容格式，解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    //把包含的内容反映给客户端
    res.end(str)
})

server.listen(80,()=> {
    console.log('有人正在访问80端口,http://127.0.0.1')
})