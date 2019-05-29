import Vue from 'vue'
import App from './App.vue'
import router from './router'
const axios = require('axios');

Vue.config.productionTip = false

function loggedIn(){
  let token = localStorage.getItem('token')
  axios.defaults.headers.common['authorization'] = token
  return axios.post(`/api/verifica`).then(response => {
    console.log(response.data.token)
    console.log(token)
    if (token == response.data.token){
      return true
    } else {
      return false
    }
  })
}

/* Valida Login */
router.beforeEach(async (to, from, next) => {
  const token = await loggedIn()
  console.log(token);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = await loggedIn()
    if (token) {
      next()
    }else {
      next({
        name: 'login'
      })
    }
  }else if (to.matched.some(record => record.meta.requiresVisor)){
    const token = await loggedIn()
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
  }
});



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
