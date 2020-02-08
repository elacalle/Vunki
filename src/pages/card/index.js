import template from './index.html'
import cardMixin from '../../services/database/card'

export default Vue.extend({
  template,
  mixins: [cardMixin],
  data: () => {
    return {
      cardList: []
    }
  },
  methods: {
    async loadCards () {
      this.cardList = await this.all()
    },
    deleteCard: function (id) {
      this.delete(id)
      this.success()
      this.loadCards()
    },
    success () {
      this.$buefy.toast.open({
        message: this.$t('card.form.success'),
        type: 'is-success'
      })
    }
  },
  async created () {
    this.loadCards()
  }
})
