import { createRouter, createWebHistory } from "vue-router";

import Welcome from '../pages/Welcome.vue'
import Addtask from '../pages/Addtask.vue'
import Viewtask from '../pages/Viewtask.vue'
import Comtask from '../pages/Comtask.vue'
import Taskedit from '../pages/Taskedit.vue'
import Login from '../pages/reg/Login.vue'


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
        component: Viewtask
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