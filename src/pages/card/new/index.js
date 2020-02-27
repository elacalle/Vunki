import template from './index.html'
import sharedView from '../shared'
import cardMixin from '../../../mixins/card'

export default Vue.extend({
  template,
  mixins: [cardMixin],
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
  methods: {
    async saveCard (e) {
      await this.save(e)
      this.card = { word: null, meaning: null, difficulty: 0, deck: 0 }
      this.$router.push('/card')
    }
  },
  created () {
    this.$on('save', function (e) {
      this.saveCard(e)
    })
  }
})
