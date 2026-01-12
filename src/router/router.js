import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ExoneView from '../views/ExoneView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/methods',
            name: 'Methods exercise',
            component: ProductView
        },
        {
            path: '/exone',
            name: 'first exercise',
            component: ExoneView
        }
    ]
})

export default router