<template>
  <div id="app">

    <!--  Menu Header  -->
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">Lineysoft</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/panel" v-if="tokenn">Panel</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/login" v-if="!tokenn">Login</b-nav-item>
            <b-nav-item to="/register" v-if="!tokenn">Registro</b-nav-item>
            <b-nav-item href="#" to="/logout" v-if="tokenn">Salir</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!--  End Menu Header  -->

    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<style>
#app {

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
