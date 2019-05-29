import Vue from 'vue'
import App from './App.vue'
import router from './router'
const axios = require('axios');

Vue.config.productionTip = false

function loggedIn(){
  let token = localStorage.getItem('token')
  // axios.defaults.headers.common['Authorization'] = token
  return axios.get(`/api/login`).then(response => {
    console.log(response.data)
    if (token === response.data.token){
      return true
    } else {
      return false
    }
  })
}

/* Valida Login */
router.beforeEach(async (to, from, next) => {
  const token = await loggedIn()
  console.log(token)
  next()
  /*if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token) {
      next()
    }else {
      next({
        name: 'login'
      })
    }
  }else if (to.matched.some(record => record.meta.requiresVisor)){
    if (!token) {
      next()
    }else {
      next({
        name: 'panel'
      })
    }
  }
  else {
    next()
  }*/
});



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
