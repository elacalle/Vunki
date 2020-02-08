import template from './index.html'

export default Vue.extend({
  template,
  data: () => {
    return {
      isActive: false
    }
  }
})
