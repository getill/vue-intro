import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import FirstView from '../views/FirstView.vue'

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
            path: '/first',
            name: 'first exercise',
            component: FirstView
        }
    ]
})

export default router