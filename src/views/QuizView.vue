<template>
  <h1>Quiz</h1>
  <div >
    <Question></Question>
    <QuizButtons></QuizButtons>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'

import Question from '@/Question.vue';
import QuizButtons from '@/QuizButtons.vue';
</script>
