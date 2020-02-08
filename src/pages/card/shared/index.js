import template from './index.html'
import VunkiErrors from '../../../components/vunki-errors'

import { required, minLength } from 'vuelidate/lib/validators'

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
        required,
        minLength: minLength(5)
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
        this.clearFields()
      }
    },
    clearFields () {
      this.card = { word: null, meaning: null, difficulty: 0, deck: 0 }
      this.$v.$reset()
    },
    back: function () {
      this.$router.push({
        path: '/'
      })
    }
  }
})
