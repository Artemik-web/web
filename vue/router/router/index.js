import VueRouter from '../js/vue-router_esm.js';

    //导入页面组件
     import Home from '../views/Home.js'
     import About from '../views/About.js'

      const router = new VueRouter({
         routes: [
            {path:'/',redirect: '/home'},
             {path:'/home',component: Home},
             {path:'/about',component: About}
         ]
     })

     export default router;