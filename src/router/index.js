import { createRouter, createWebHistory } from 'vue-router'

import useQuizStore from '@/stores/useQuizStore'

import HomeView from '@/views/HomeView.vue'
import QuizView from '@/views/QuizView.vue'
import ResultsView from '@/views/ResultsView.vue';

const refresh = false;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: () => {
        const quizStore = useQuizStore()

        quizStore.resetAll();

        return
      }
    },
    { 
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
      beforeEnter: () => {
        const quizStore = useQuizStore()

        return quizStore.questions.length > 0 ? true : '/'
      }
    },
    { 
      path: '/results',
      name: 'results',
      component: ResultsView,
      beforeEnter: () => {
        const quizStore = useQuizStore()

        if (quizStore.currentRound > 0 && quizStore.answers.length > 0) {
          return true
        }

        return '/'
      }
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
