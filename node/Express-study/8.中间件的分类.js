//1.应用级别的中间件
        //通过app.use()或app.get()/post(),绑定到app实例上的中间件，叫做应用级别的中间件
//2.路由级别的中间件
        //绑定到express.Router()实例上的中间件，叫做路由级别的中间件，用法与应用级别中间件无区别只是绑定对象不同
//3.错误级别的中间件
        //注意：错误级别的中间件必须注册在所有路由之后，其他中间件是路由之前
        //错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止整个项目异常崩溃的问题
        //格式：错误级别中间件的function处理函数中，必须有4个形参，顺序分别是(err, req, res, next)
        const express = require('express')
        const app = express()

        app.get('/', (req, res)=> {
            //1.人为制造错误
           throw new Error('服务器內部发生错误')
            res.send('没有问题')

        })
        //错误级别的中间件
        function err(err, req, res, next){
            console.log('出错了' + err.message)
            res.send('Error!')//告知客户端服务器出现错误
            next()
        }
        app.use(err)
        app.listen(80, ()=> {
            console.log('express running at http://127.0.0.1')
        })
//4.express内置的中间件
        //express4.16.0版本开始，express内置了3个常用的中间件
        //1.express.static()快速托管静态资源的内置中间件，例如：HTML文件，图片，css样式等(无兼容性)
        //2.express.json解析JSON格式的请求数据(有兼容性，仅在4.16.0+版本中可用)
        //3.express.urlencoded解析URL-encoded格式的请求体数据(有兼容性，仅在4.16.0+版本中可用)
            //配置解析 application/json 格式数据的内置中间体
            app.use(express.json())
            //配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
            app.use(express.urlencoded({extended: false}))
//5.第三方的中间件