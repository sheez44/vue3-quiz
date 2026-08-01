<template>
<Button :disabled @click="prevRound()">prev</Button>
<Button :disabled="!quizStore.getCurrentAnswer" @click="nextRound()">next</Button>
</template>

<script setup>
import Button from '@/Button.vue'

import useQuizStore from '@/stores/useStoreQuiz'
import { useRouter } from 'vue-router';

import { computed } from 'vue';

const quizStore = useQuizStore()
const router = useRouter();

const disabled = computed(() => quizStore.currentRound === 0)

function prevRound() {
    quizStore.previousRound()
}

function nextRound() {
    const isComplete = quizStore.nextRound()
  
    if (isComplete) {
        router.push('/results')
    }
}
</script>