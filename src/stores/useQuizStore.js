import { defineStore } from 'pinia'

const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: [],
    quizQuestions: [],
    answers: [],
    currentRound: 0,
    hasStarted: false,
    settings: {rounds: 8}
  }),

  getters: {
    getCurrentQuestion() {
      if(this.quizQuestions.length > 0) {
        return this.quizQuestions[this.currentRound];
      }
      else {
        console.warn('no questions');
      }
    },
    getCurrentAnswer() {
      return this.answers[this.currentRound]
    }
  },

  actions: {
    importQuestions(questions) {
      this.questions = question
    },

    startQuiz(settings) {
      this.settings = { ...this.settings, ...settings }
      if(this.settings.questions.length > 0) {
        this.questions = this.settings.questions;
        this.setQuestions();      
      }
  
    },

    setQuestions() {
      const selected = []

      while (selected.length < this.settings.rounds) {
          const question = this.questions[Math.floor(Math.random() * this.questions.length)]

          if (!selected.includes(question)) {
              selected.push(question)
          }
      }

      this.quizQuestions = selected 
    },

    addAnswer(answer) {
      this.answers[this.currentRound] = answer
    },

    nextRound() {
      console.log(this.answers)
      if(this.currentRound < this.quizQuestions.length - 1) {
        this.currentRound++
      } else {
        return true // Signal that quiz is complete
      }   
    },
    
    previousRound() {
      if(this.currentRound > 0) {
        this.currentRound--
      }
    },

    resetAll() {
      this.questions = [],
      this.quizQuestions = [],
      this.answers = [],
      this.currentRound = 0
    },
  }

})

export default useQuizStore;