// 1. 导入路由并使用
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/Login";
import Main from "@/components/Main";
import SignUp from "@/components/SignUp";
// 使用功能VueRouter插件
Vue.use(VueRouter)
//  2. 创建路由实例,并配置路由映射
const  routes=[
    {
        name:"Login",
        path:'/',
        component: Login
    },
    {
        name:'SignUp',
        path: '/SignUp',
        component: SignUp
    },
    {
        path:'/Main',
        name:'Main',
        component: Main,
        children:[//二级路由

        ]
    }
]
//  2.1 创建路径与组件的映射关系
const  router = new VueRouter(
    {
        // mode:history,
        base:process.env.BASE_URL,
        routes:routes
     }
    )
export default router;
    // {
    //     path:'/list',
    //     component: List
    // },
    // {
    //     path:'/about',
    //     component: About
    // }


