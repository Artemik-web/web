const path = require('path')
//path.join()方法，用来将多个路径片段拼成一个完整的路径字符串
// ------------------------
//../会抵消前面的路经 ./不会
const pathStr1 = path.join('/a', '/b/c', '../','./d', 'e')
console.log(pathStr1)
//path.basename()方法，用来从路径字符串中,将文件名解析出来
//-------------------------
//获取最后一部分文件名
const fpath = 'a/b/c/index.html'
const fullName = path.basename(fpath)
console.log('fpath的最后部分文件名是'+ fullName)
//第一个参数为文件名第二个参数为要去除的部分
const nameWithoutfinally = path.basename(fpath, '.html')
console.log(nameWithoutfinally)
// path.extname()获取文件扩展名
//------------------------
const ext = path.extname(fpath)
console.log(ext)
