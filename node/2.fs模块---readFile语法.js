const fs = require('fs') //fs模块导入
// fs.readFile(path[,options],callback) //[]内为可选参数，设置编码格式
fs.readFile('./1.txt', 'utf8', function(err, dataStr){
    if(err){
        console.log('读取失败'+ '原因' +err);
    //失败后打印错误
    }else{
        console.log('读取成功' + '结果' +dataStr)
    //成功后打印读取数据 
    }
})

console.log('----------')
   

