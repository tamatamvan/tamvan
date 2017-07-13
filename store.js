const store = new Vuex.Store({
  state: {
    loading: false,
    answeredQuestion: null,
    answerData: {
      answer: null,
      image: null
    }
  },
  mutations: {
    giveAnswer (state, answerData) {
      state.answeredQuestion = answerData.answeredQuestion
      state.answerData = answerData.detail
    },
    loading (state) {
      state.loading = !state.loading
    },
    reset (state) {
      state.answeredQuestion = null 
    }
  },
  actions: {
    askQuestion ({ commit }, question) {
      commit('loading')
      axios.get(`https://yesno.wtf/api`)
      .then((response) => {
        commit('loading')
        commit('giveAnswer', {
          answeredQuestion: question,
          detail: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
})