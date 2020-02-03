import template from './index.html'

export default Vue.extend({
  template,
  methods: {
    createCard: function () {
      this.$router.push({path: '/card/new'})
    }
  }
})