<template>
  <div id="app">
    <div id="nav" v-if="url != '/login'">
      <router-link to="/">Home </router-link>
      <a href="/login">| Login </a>
      <router-link to="/register" v-if="!tokenn"> | Registro </router-link>
      <router-link to="/panel" v-if="tokenn"> | Panel  </router-link>
      <router-link to="/logout" v-if="tokenn"> | Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  export default {
    data(){
      return{
        token: '',
        url: window.location.pathname
      }
    },
    computed: {
      tokenn: function () {
        if (localStorage.getItem('token')){
          return true
        }else{
          return false
        }
        console.log(this.url);
      }
    },
    created() {

      // console.log(this.token)
    }
  }

</script>
