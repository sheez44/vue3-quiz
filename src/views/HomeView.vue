<template>
  <h2>Home</h2>

  <form>
    <label for="rounds">How many questions?</label>
    <input type="number" max="50" min="1" v-model="quizRounds"/>
  </form>

  <RouterLink @click="startQuiz" to="/quiz" class="inline-block px-6 py-3 bg-green-600 text-white rounded-md no-underline">
    Start Quiz
  </RouterLink>
</template>

<script setup ts>
import { ref } from 'vue'

import useQuizStore from '@/stores/useQuizStore'

import questions from '@/questions.json'

const quizStore = useQuizStore()
const quizRounds = ref(2)

const settings = {
  questions,
  rounds: quizRounds
}

function startQuiz() {
  quizStore.startQuiz(settings)
}

</script>