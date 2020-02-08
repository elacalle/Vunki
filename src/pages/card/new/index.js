import template from './index.html'
import sharedView from '../shared'

export default Vue.extend({
  template,
  components: { sharedView },
  data: () => {
    return {
      card: {
        word: '',
        meaning: '',
        difficulty: 0,
        deck: 0
      }
    }
  },
  created () {
    this.$on('save', function (e) {
      Database.cards.put(e)
    })
  }
})
