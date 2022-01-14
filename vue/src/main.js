import Vue from 'vue'
import App from './App.vue'

// add the store and router to the entire application
import store from './store'
import router from './router'

// to style the application
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
