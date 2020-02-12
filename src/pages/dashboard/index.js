import template from './index.html'
import VunkiMenu from '../../components/vunki-menu'
import VunkiNav from '../../components/vunki-navbar'

export default Vue.extend({
  template,
  components: { VunkiMenu, VunkiNav },
  methods: {
    createCard: function () {
      this.$router.push({ path: '/card/new' })
    }
  }
})
