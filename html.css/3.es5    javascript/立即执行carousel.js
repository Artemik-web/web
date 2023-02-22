+function(){
    //默认配置文件
    var DEFAULTS = {
        delay : 5000,
        autoplay : true,
    }


    //旋转木马插件  selector选择器
    //config 用户配置文件
    function Carousel(selector,config){
        //产生新的配置文件
        //用用户的参数替换默认参数，然后将新的配置文件，放入到一个全新的对象中
        config = Object.assign({}, DEFAULTS,{delay:3000});

        //代码省略
        console.log('hello Carousel');
    }
    //因为Carousel 函数是在iife函数内部定义，属于局部变量，所以外部访问不了
    //使用window顶级对象缓存内部的函数
    window.Carousel = Carousel;
}();