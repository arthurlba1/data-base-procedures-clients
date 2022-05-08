import Vue from 'vue'
import VueRouter from 'vue-router'

import ClientListView from '../views/ClientListView'
import HomeView from '../views/HomeView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/clients-list',
        name: 'Client List',
        component: ClientListView
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
