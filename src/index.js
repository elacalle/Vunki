import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n';
import router from './routes';
import messages from './locales'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import './styles/main.css';

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueI18n);
Vue.use(Buefy);

let i18n = new VueI18n({
  locale: 'en',
  messages 
});

new Vue({
    el: '#app',
    i18n,
    router
});