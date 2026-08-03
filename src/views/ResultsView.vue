<template>
    <h1>Results</h1>
    <h3>You answered <strong>{{ totalCorrectAnswers }}</strong> out of {{ quizQuestions.length }} correctly</h3>
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
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import useQuizStore from '@/stores/useQuizStore'

const quizStore = useQuizStore()

const totalCorrectAnswers = computed(() => quizStore.countCorrectAnswers)

const quizQuestions = computed(() =>
  quizStore.quizQuestions.slice(0, quizStore.settings.rounds)
)

const getOptionClasses = (option, answer, questionIndex) => ({
  'bg-red-200':
    option === quizStore.answers[questionIndex] && option !== answer,
  'bg-green-200': option === answer,
  'font-bold': option === quizStore.answers[questionIndex]
})

onMounted(() => {
  quizStore.checkHistory()
})
</script>