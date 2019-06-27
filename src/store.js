import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
var jwtDecode = require('jwt-decode')
var qs = require('qs');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    nombre: localStorage.getItem('lineysoft_nombre') || null,
    email: localStorage.getItem('lineysoft_email') || null,
    ruc: localStorage.getItem('lineysoft_ruc') || null,
    id: localStorage.getItem('lineysoft_id') || null
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    }
  },
  actions: {
    retrieveToken(context, user) {

      return new Promise((resolve, reject) => {
        axios.post('http://api.lineysoft2.com:8080/controllers/login/login.php', qs.stringify({
          username: user.username,
          password: user.password,
        })).then(response => {
          const token = response.data
          var dato = jwtDecode(token)

          // Asigna valores LocalStorage
          localStorage.setItem('access_token', token)
          localStorage.setItem('lineysoft_nombre', dato.data.nombre)
          localStorage.setItem('lineysoft_email', dato.data.email)
          localStorage.setItem('lineysoft_ruc', dato.data.ruc)
          localStorage.setItem('lineysoft_id', dato.data.id)

          context.commit('retrieveToken', token)
          resolve(response)
          // console.log(response);
        })
            .catch(error => {
              console.log(error)
              reject(error)
            })
      })
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('lineysoft_nombre')
        localStorage.removeItem('lineysoft_email')
        localStorage.removeItem('lineysoft_ruc')
        localStorage.removeItem('lineysoft_id')
        context.commit('destroyToken')
      }
    }
  }
})