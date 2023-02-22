## 安装
```
npm install  artemik
```

## 导入
```js
const artemik = require('artemik')
```

## 格式化时间
```js
//调用dateFormat对时间进行格式化
const deStr = artemik.dateFormat(new Date())
//结果 2022-09-05 11:04:10
console.log(dtStr)
```

## 转义/恢复 HTML 中的特殊字符
```js
//
const artemik = require('../artPack/index')
const str = new Date()
console.log(artemik.dateFormat(str))
console.log('-------------------')
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str1 = artemik.htmlEscape(htmlStr)//转义
console.log(str1)//结果  &lth1 title=&quotabc&quot&gt这是h1标签&ltspan&gt123&ampnbsp;&lt/span&gt&lt/h1&gt
const str2 = artemik.htmlUnEscape(str1)//恢复
console.log(str2)//结果  <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
```

## 开源协议
ISC