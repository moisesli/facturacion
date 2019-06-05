import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login/Login.vue'
import Register from './views/login/Register.vue'
import Documentos from './views/documentos/Documentos'
import Panel from './views/panel/Main.vue'
import Logout from './views/login/Logout.vue'
import Productos from './views/productos/Productos'
import Clientes from './views/clientes/Clientes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login, meta: { requiresVisor: true } },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresVisor: true
      }
    },
    {
      path: '/panel',
      name: 'panel',
      component: Panel,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/documentos',
      name: 'documentos',
      component: Documentos,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/productos',
      name: 'productos',
      component: Productos,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
