<script setup>
import { ref } from 'vue'
import questions from '@/questions.json'

const quizQuestions = ref(getQuizQuestions(questions, 10))

function getQuizQuestions(array, amount) {
    const selected = []

    while (selected.length < amount) {
        const question = array[Math.floor(Math.random() * array.length)]

        if (!selected.includes(question)) {
            selected.push(question)
        }
    }

    return selected
}
</script>

<template>
    <div v-for="question in quizQuestions" :key="question.id">
    <h3>{{ question.question }}</h3>
    <ul>
      <li v-for="(option, index) in question.options" :key="index">
        {{ option }}
      </li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>

</style>