import template from './index.html'
import sharedView from '../shared'
import cardMixin from '../../../mixins/card'

export default Vue.extend({
  template,
  components: { sharedView },
  mixins: [cardMixin],
  data: () => {
    return {
      card: {}
    }
  },
  methods: {
    loadCard: async function () {
      this.card = await this.get(this.$route.params.id)
    }
  },
  created () {
    this.loadCard()
    this.$on('save', card => { this.update(card.id, card) })
  }
})
