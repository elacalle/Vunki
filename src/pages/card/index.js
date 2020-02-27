import template from './index.html'
import cardMixin from '../../mixins/card'

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
      this.remove(id)
      this.success()
      this.loadCards()
    },
    success () {
      this.$buefy.toast.open({
        message: this.$t('card.form.success.deleted'),
        type: 'is-success'
      })
    }
  },
  created () {
    this.loadCards()
  }
})
