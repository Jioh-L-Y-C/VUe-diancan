import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)

//引入路由一级路由
import Home from "../components/Home.vue"
import Admin from "../components/Admin.vue"
import Login from "../components/Login.vue"
import Menu from "../components/Menu.vue"
import Register from "../components/Register.vue"
import About from "../components/about/Index.vue"

//2级路由
// import Contact from "../components/about/Contact.vue"
// import CookBook from "../components/about/CookBook.vue"
// import History from "../components/about/History.vue"
// import Delivery from "../components/about/Delivery.vue"
import History from '../components/about/History.vue'
import Delivery from '../components/about/Delivery.vue'
import CookBook from '../components/about/CookBook.vue'
import Contact from '../components/about/Contact.vue'


//3级路由
import Person from "../components/about/Conact/Person.vue"
import Phone from "../components/about/Conact/Phone.vue"

const router = new Router({
    mode: 'history', //去掉has部分的#
    routes: [
        //默认首页
        { path: "/", name: "homeLink", component: Home },
        { path: "/menu", name: "menuLink", component: Menu },
        { path: "/admin", name: "adminLink", component: Admin },
        { path: "/login", name: "loginLink", component: Login },
        {
            path: "/about",
            name: "aboutLink",
            component: About,
            redirect: "/contact",
            children: [
                { path: "/history", name: "historyLink", component: History },
                { path: "/delivery", name: "deliveryLink", component: Delivery },
                { path: "/cookbook", name: "cookbookLink", component: CookBook },
                {
                    path: "/contact",
                    name: "contactLink",
                    component: Contact,
                    redirect: "/person",
                    children: [
                        { path: "/phone", name: "phoneLink", component: Phone },
                        { path: "/person", name: "personLink", component: Person },
                    ]
                }
            ]
        },
        { path: "/register", name: "registerLink", component: Register },
        { path: "*", redirect: "/" } //默认
    ]
})

router.beforeEach((to,from,next)=>{

        if(to.path=='/login'||to.path=='/register'){
           next()
    }else{
        if(store.getters.isLogin){
            // alert('登录成功,跳到首页')
            next()

        }else{
            if(!store.getters.isLogin){
                next('/login')
         alert('没有登录请先去登录')
            }
        next('/login')
        }
        
   }

  
  
})
export default router

// router.beforeEach((to, from, next) => {

// })