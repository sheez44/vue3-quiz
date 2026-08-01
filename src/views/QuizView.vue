<template>
  <h1>Quiz</h1>
  <div >
    <h2>Results: you answered  correctAnswers / quizQuestions.length correctly</h2>
    CurrentRound: {{ quizStore.currentRound }}
    <Question></Question>
    <QuizButtons></QuizButtons>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import questions from '@/questions.json'

import Question from '@/Question.vue';

import useQuizStore from '@/stores/useQuizStore'
import QuizButtons from '@/QuizButtons.vue';

const quizStore = useQuizStore()

const settings = {
  questions,
  rounds: 2
}
quizStore.startQuiz(settings)

</script>
