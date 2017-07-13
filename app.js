Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})

new Vue({
  el: '#app',
  data: {
    question: '',
    imgGif: 'http://i.imgur.com/y04Bu1o.gif',
    confirm: {
      title: 'Hail Lord Magic Shell',
      contentHtml: '<img src="http://i.imgur.com/y04Bu1o.gif" style>',
      ok: 'Hail Hydra!'
    }
  },
  store,
  methods: {
    reset () {
      this.question = ''
      this.$store.commit('reset')
      this.openDialog('hail')
    },
    submitQuestion () {
      this.$store.dispatch('askQuestion', this.question)
    },
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    onOpen() {
      console.log('Opened');
    },
    onClose(type) {
      console.log('Closed', type);
    }
  },
  computed: Vuex.mapState([
    'loading',
    'answeredQuestion',
    'answerData'
  ])
})