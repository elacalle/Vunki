import template from './index.html'
import VunkiMenu from '../../components/vunki-menu'

export default Vue.extend({
  template,
  components: {VunkiMenu},
  methods: {
    createCard: function () {
      this.$router.push({path: '/card/new'})
    }
  }
})