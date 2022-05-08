import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
