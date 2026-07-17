import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import Quiz from '@/views/Quiz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      name: 'home',
      component: HomeView
    },
    { 
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    }
  ],
})

export default router
