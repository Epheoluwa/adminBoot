import { createRouter, createWebHistory } from "vue-router";

import Welcome from '../pages/Welcome.vue'
import Addtask from '../pages/Addtask.vue'  
import Viewtask from '../pages/Viewtask.vue'
import Comtask from '../pages/Comtask.vue'
import Taskedit from '../pages/Taskedit.vue'
import Login from '../pages/reg/Login.vue'
import axios from "axios";


const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/addtask',
        name: 'Addtask',
        component: Addtask
    },
    {
        path: '/viewtask',
        name: 'Viewtask',
        component: Viewtask,
        beforeEnter:(to, from, next) =>{
            axios.get('/api/athenticated').then(()=>{
                next()
            }).catch((e)=>{
                console.log(e.message)
                return next({name: 'Login'})
            })
        }
    },
    {
        path: '/completedtask',
        name: 'Comtask',
        component: Comtask
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Taskedit',
        name: 'Taskedit',
        component: Taskedit,
        props: true
    }
];

const router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router