import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Likes from '../views/Likes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: Likes,
    },
    {
      path:'/:pathMatch(.*)*',
      name: 'all',
      component: HomeView
    }
  ]
})

export default router
