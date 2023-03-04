import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
import VueMeta from 'vue-meta'
import moment from 'moment'

Vue.prototype.moment = moment
Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('YYYY-MM-DD HH:mm')
  }
});
new Vue({
  router,
  store,
  i18n,
  vuetify,
  VueMeta,
  render: h => h(App)
}).$mount('#app')
