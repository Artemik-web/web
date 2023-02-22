const fs = require('fs')
const path = require('path')


const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './7.path练习.html'), 'utf8', function(err, dataStr){
    if(err) return console.log('读取失败：'+ err)
    //如果读取成功，调用三个对应的正则方法拆解

    function resolveCss(htmlStr) {
        const str1 = regStyle.exec(htmlStr)
        const newCss = str1[0].replace('<style>', '').replace('</style>', '')
        console.log(newCss)
        fs.writeFile(path.join(__dirname, './pack/1.css'), newCss, err => {
            if(err) return  console.log('写入失败：'+ err.message)
            console.log('写入成功')
        })
    }
    function resolveJs(htmlStr) {
        const str1 = regScript.exec(htmlStr)
        const newJs = str1[0].replace('<script>', '').replace('</script>', '')
        console.log(newJs)
        fs.writeFile(path.join(__dirname, './pack/1.js'), newJs, err => {
            if(err) return  console.log('写入失败：'+ err.message)
            console.log('写入成功')
        })
    }
    function resolveHtml(htmlStr) {
        const html1 = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./1.css">').replace(regScript, '<link src="./1.js">')
        console.log(html1)
        fs.writeFile(path.join(__dirname, './pack/1.html'), html1, err =>{
            if(err) return console.log('写入失败：' + err.messags)
            console.log('写入成功')
        })
    }
    resolveCss(dataStr)
    resolveJs(dataStr)
    resolveHtml(dataStr)
    
})
// fs.readFile(path.join(__dirname,'7.path练习.html'), 'utf8', function(err, dataStr){
//     if(err) {
//         return console.log('读取失败：'+ err)
//     }
//     // console.log('读取成功：\r\n'+ dataStr)
//     const data = dataStr.split(/<style>[\s\S]*<\/style>/)
//     console.log('读取成功：\r\n' + data)
// })
