import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import QuizView from '@/views/QuizView.vue'

const refresh = false;

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
      component: QuizView
    }
  ],
})

if(refresh) {
  router.beforeEach((to, from) => {
  if(to.name === 'quiz' && !from.name) {
    // User is trying to access /quiz directly or after a refresh
    // (from.name is undefined on initial page load)
    return { name: 'home' }
  }
})
}


export default router
