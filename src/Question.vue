<template>
    <div>
        <h3>{{ questionTitle }}</h3>

        <QuestionOptions :options="currentQuestion.options" @select="handleOptionsSelect" />
    </div>
</template>

<script setup>
    import useQuizStore from '@/stores/useStoreQuiz'
    import QuestionOptions from '@/QuestionOptions.vue';
    import { computed } from 'vue'

    const quizStore = useQuizStore()

    const currentQuestion = computed(() => quizStore.getCurrentQuestion)
    const questionTitle = computed(() => currentQuestion.value.question)

    function handleOptionsSelect(option) {
        quizStore.addAnswer(option)
    }
</script>