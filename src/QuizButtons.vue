<template>
<Button :disabled @click="prevRound()">prev</Button>
<Button :disabled="!quizStore.isAnswered" @click="nextRound()">next</Button>
</template>

<script setup>
import Button from '@/Button.vue'

import useQuizStore from '@/stores/useStoreQuiz'

import { computed } from 'vue';

const quizStore = useQuizStore()

const disabled = computed(() => quizStore.currentRound === 0)

function prevRound() {
    quizStore.previousRound()
}

function nextRound() {
    quizStore.nextRound()
}
</script>