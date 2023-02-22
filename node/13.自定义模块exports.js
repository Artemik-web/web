const age = 20
//向module.exports对象上挂载username属性
module.exports.username = 'zs'
//向module.exports对象上挂载sayHello方法
module.exports.sayHello = function() {
    console.log('hELLO')
}


module.exports.age = age //不导出外界取不到age
