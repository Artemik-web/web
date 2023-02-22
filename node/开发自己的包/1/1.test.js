const artemik = require('../artPack/index')
const str = new Date()
console.log(artemik.dateFormat(str))
console.log('-------------------')
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str1 = artemik.htmlEscape(htmlStr)
console.log(str1)
const str2 = artemik.htmlUnEscape(str1)
console.log(str2)