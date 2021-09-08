import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Login.vue'

const routes = [
  {
    path: '/Login',
    name: 'Login',
    // component: Home
    component:() => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
