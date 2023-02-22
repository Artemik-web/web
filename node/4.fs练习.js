const fs =require('fs')

fs.readFile('./lizi.txt', 'utf8', function(err, dataStr){
    if(err){
        console.log('读取失败',err)
    }else{
        console.log('读取数据成功，数据内容为：'+dataStr)
    }
    const arr = dataStr.split(' ')
    console.log(arr)
    const arrNew = []
    arr.forEach(item => {
        arrNew.push(item.replace('=',': '))
    });
    const res =  arrNew.join('\r\n')
    console.log(res)
    
    fs.writeFile('./成绩-ok.txt',res,function(err){
        console.log(err )
    })
})