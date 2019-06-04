<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light p-2">
      <a class="navbar-brand" href="/">
        Factura Electronica
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">

          <!-- Products -->
          <li class="nav-item dropdown">
            <a class="nav-link" href="/views/products/index.php" v-if="tokenn">Productos</a>
          </li>

          <!-- Clientes -->
          <li class="nav-item dropdown">
            <a class="nav-link" href="/views/customers/index.php" v-if="tokenn">Clientes</a>
          </li>
        </ul>
        <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
          <li class="nav-item">
            <a href="/login" v-if="!tokenn" class="nav-link">Login</a>
          </li>
          <li class="nav-item">
            <a href="/register" v-if="!tokenn" class="nav-link">Register</a>
          </li>
          <!-- Logout -->
          <li class="nav-item" v-if="tokenn">
            <router-link class="nav-link" :to="{name: 'logout'}">
              <i class="fa fa-lock"></i> Salir
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container" style="padding: 60px;">
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
        // console.log(this.url);
      }
    },
    created() {

      // console.log(this.token)
    }
  }

</script>
