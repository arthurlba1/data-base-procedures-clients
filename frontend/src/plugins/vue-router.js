import Vue from 'vue'
import VueRouter from 'vue-router'

import ClientListView from '../views/ClientListView'
import CreateClientView from '../views/CreateClientView'
import HomeView from '../views/HomeView'
import UpdateClientView from '../views/UpdateClientView'
import DeleteClientView from '../views/DeleteClientView'
import BuyProductsView from '../views/BuyProductsView'

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
    },
    {
        path: '/create-client',
        name: 'Create Client',
        component: CreateClientView
    },
    {
        path: '/update-client',
        name: 'Update Client',
        component: UpdateClientView
    },
    {
        path: '/delete-client',
        name: 'Delete Client',
        component: DeleteClientView
    },
    {
        path: '/buy-products',
        name: 'Buy Products',
        component: BuyProductsView
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
