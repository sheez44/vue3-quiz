<template>
    <h1>Results</h1>
    <ul class="list-none p-0 flex flex-col">
        <li v-for="(question, quizIndex) in quizQuestions" :key="quizIndex">
            <h3>{{ question.question }}</h3>
            <ul class="list-none p-0 flex flex-col">
                <li v-for="(option, index) in question.options" 
                    :key="index" 
                    class="pl-4 py-1"
                    :class="getOptionClasses(option, question.answer, quizIndex)">
            <span >{{ option }}</span>
        </li>
            </ul>
        </li>
    </ul>
    <RouterLink to="/">Back home</RouterLink>
</template>

<script setup>
import useQuizStore from '@/stores/useQuizStore'
import { useRouter, RouterLink } from 'vue-router'

import { computed } from 'vue';

const quizStore = useQuizStore()
const router = useRouter();

const getOptionClasses = (option, answer, questionIndex) => {
  return {
    'bg-red-200': option === userAnswers[questionIndex] && option !== answer,
    'bg-green-200': option === answer,
    'font-bold': option === userAnswers[questionIndex]
  }
}

const quizQuestions = quizStore.quizQuestions
const userAnswers = quizStore.answers
</script>