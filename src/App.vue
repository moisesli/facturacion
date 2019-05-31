<template>
  <div id="app">

    <!--  Menu Header  -->
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">Lineysoft</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"><i class="fa fa-user-circle"></i> Login</b-nav-item>
            <b-nav-item href="#" to="/register"><i class="fa fa-file-alt"></i> Registro</b-nav-item>
            <b-nav-item href="#" to="/logout"><i class="fa fa-sign-out-alt"></i> Salir</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!--  End Menu Header  -->

    <div id="nav" v-if="url != '/login'">
      <router-link to="/">Home </router-link>
      <a href="/login">| Login </a>
      <router-link to="/register" v-if="!tokenn"> | Registro </router-link>
      <router-link to="/panel" v-if="tokenn"> | Panel  </router-link>
      <router-link to="/logout" v-if="tokenn"> | Logout</router-link>
    </div>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  text-align: center;
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
