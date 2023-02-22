const fs = require('fs')
//出现路径拼接错误的问题，是因为提供了 ./或../开头的相对路径
//如果要解决这个问题， 可以直接提供一个完整的文件路径就行
//  fs.readFile('./1.txt','utf8', function (err, dataStr){
//     if(err) {
//         return console.log('读取文件失败！' + err.message)
//     }
//     console.log('读取文件成功！' + dataStr)
//  })
// -------------------------------
// \转义
//移植性差，不利于维护
// fs.readFile('E:\\1.个人文件夹\\node学习\\1.txt','utf8', function (err, dataStr){
//     if(err) {
//         return console.log('读取文件失败！' + err.message)
//     }
//     console.log('读取文件成功！' + dataStr)
//  })
// ----------------------------------
//__dirname当前文件夹
 fs.readFile(__dirname + './1.txt','utf8', function (err, dataStr){
    if(err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
 })
console.log(__dirname)