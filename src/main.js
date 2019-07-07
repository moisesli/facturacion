import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
const $ = require('jquery')
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Inicializa bootstrap
Vue.config.productionTip = false;
window.$ = $;

// axios.interceptors.request.use(request => {
//   console.log(request)
//   return request
// })

if (window.location.origin === 'http://localhost:8080'){
  axios.defaults.baseURL = 'http://api.localhost/'
}else {
  axios.defaults.baseURL = 'http://api.lineysoft.com/'
}



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'panel',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
