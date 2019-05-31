<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home </router-link>
      <router-link to="/login" > | Login</router-link>
      <router-link to="/register" > | Registro </router-link>
      <router-link to="/panel" > | Panel  </router-link>
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
        acces: false
      }
    },
    methods: {
      tokenn: function () {
        if (localStorage.getItem('token').length > 3 ){
          console.log('moi')
          return false
        }
      }
    },
    created() {

    }
  }

</script>
