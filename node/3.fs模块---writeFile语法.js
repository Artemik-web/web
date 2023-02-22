const fs = require('fs')

// fs.writeFile(file,data[, options], callback) .....[]内为可选参数，file为指定文件路径的字符串，data为要写入的内容，callback必写的回调函数

fs.writeFile('./lizi.txt','abcdefg', function(err){
    if(err){
        return '写入失败，err值为true' 
    }
    console.log('写入成功,err值为'+err)//输出为null说明写入成功，路径存在则覆盖内容不存在则创建文件
})

