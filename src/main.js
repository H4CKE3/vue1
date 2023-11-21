import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
Vue.config.productionTip = false
Vue.directive('focus', {
  updated(e) {
    e.focus()
  },
  inserted(e) {
    e.focus()
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
