import template from './index.html'
import VunkiErrors from '../../../components/vunki-errors'

import { required } from 'vuelidate/lib/validators'

export default Vue.extend({
  template,
  components: {
    VunkiErrors
  },
  props: {
    card: {
      type: Object
    }
  },
  validations: {
    card: {
      word: {
        required
      },
      meaning: {
        required
      }
    }
  },
  computed: {
    valid: function () {
      return !this.$v.$error
    }
  },
  methods: {
    save: function () {
      this.$v.$touch()

      if (this.valid) {
        this.$parent.$emit('save', this.card)
        this.success()
        this.clearFields()
      }
    },
    clearFields () {
      this.card = { word: null, meaning: null, difficulty: 0, deck: 0 }
      this.$v.$reset()
    },
    back: function () {
      this.$router.go(-1)
    },
    success () {
      this.$buefy.toast.open({
        message: this.$t('card.form.success'),
        type: 'is-success'
      })
    }
  }
})
