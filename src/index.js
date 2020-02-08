import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import router from './routes'
import messages from './locales'
import Buefy from 'buefy'
import VunkiNav from './components/vunki-navbar'
import '@mdi/font/css/materialdesignicons.css'
import 'buefy/dist/buefy.css'
import './styles/main.css'

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VueI18n)
Vue.use(Buefy)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { VunkiNav },
  i18n,
  router
})
