import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/BackStage/Login.vue'

const routes = [
  {
    path: '/Login',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
