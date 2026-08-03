import { defineStore } from 'pinia'

const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: [],
    quizQuestions: [],
    answers: [],
    currentRound: 0,
    settings: {rounds: 8}
  }),

  persist: {
    pick: [
      'quizQuestions',
      'answers',
      'currentRound',
      'settings'
    ]
  },

  getters: {
    getCurrentQuestion() {
      
    if(this.quizQuestions.length > 0) {
        return this.quizQuestions[this.currentRound];
      }
      else {
        this.checkHistory()
        return this.quizQuestions[this.currentRound];
      }
    },
    getCurrentAnswer() {
      console.log(this.answers, this.currentRound)
      return this.answers[this.currentRound]
    },
    countCorrectAnswers() {
      return this.answers.reduce((count, answer, index) => {
        return count + (answer === this.quizQuestions[index]?.answer ? 1 : 0)
      }, 0)
    }
  },

  actions: {
    importQuestions(questions) {
      this.questions = questions
    },

    startQuiz(settings) {
      this.settings = { ...this.settings, ...settings }

      if(this.settings.questions.length > 0) {
        this.importQuestions(settings.questions)
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
      console.log(this.currentRound, this.settings.rounds)
      if(this.currentRound < this.settings.rounds - 1) {
      
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