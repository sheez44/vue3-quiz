<script setup>
import { ref } from 'vue'
import questions from '@/questions.json'

const quizRounds = ref(2)
const quizQuestions = ref(getQuizQuestions(questions, quizRounds.value))
const round = ref(0)
const answered = ref(false)
const answerSheet = ref([])
const showResults = ref(false)
const correctAnswers = ref(0);

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

function nextRound() {

  if(round.value + 1 === quizRounds.value) {
    handleResults()
    return;
  }

    round.value++

  if(round.value + 1 > answerSheet.value.length) {
    answered.value = false
  }
}

function prevRound() {
  round.value--;
  answered.value = true;
}

function handleClick(option) {
  answered.value = true
  
  answerSheet.value[round.value] = quizQuestions.value[round.value].options[option]
}

function handleResults() {
  showResults.value = true;

  checkResults()
}

function checkResults() {
  answerSheet.value.forEach((answer, index) => {
    if(quizQuestions.value[index].answer === answer) {
      correctAnswers.value++
    }
  })

}

console.log(quizQuestions.value[round.value])
</script>

<template>
  <h1>Quiz</h1>
  <div v-if="showResults">
    <h2>Results</h2>
    <p>correctAnswers: {{ correctAnswers }}</p>
  </div>
  <div v-else>
    <h2>Question {{ round + 1 }}</h2>
    <div>
    <h3>{{ quizQuestions[round].question }}</h3>
    <ul>
      <li v-for="(option, index) in quizQuestions[round].options" :key="index" @click="handleClick(index)">
        <span>{{ option }}</span>
      </li>
    </ul>
    <button @click="prevRound" :disabled="round <= 0">Prev</button>
    <button @click="nextRound" :disabled="!answered">Next</button>
  </div>
  </div>

</template>



<style lang="scss" scoped>

</style>