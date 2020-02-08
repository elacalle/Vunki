import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import routerPaths from './routes'
import messages from './locales'
import Buefy from 'buefy'
import '@mdi/font/css/materialdesignicons.css'
import 'buefy/dist/buefy.css'
import './styles/main.css'

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VueI18n)
Vue.use(Buefy)

const router = new VueRouter(routerPaths)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  i18n,
  router,
  computed: {
    dashboard () {
      return routerPaths.routes[0].component
    },
    currentComponent: function () {
      var foundRoute = this.$route.matched.find(component => { return component.name === this.$route.name })

      return foundRoute ? foundRoute.components.default : null
    }
  }
})
