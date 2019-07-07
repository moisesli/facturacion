<template>
  <div>
    <h2 class="pt-3 pb-4">Login Usuario</h2>
    <div class="row">
      <div class="col-lg-8">
        
        <div class="row alert alert-danger" v-show="error.length>2">
          <div class="col">
            {{error}}
          </div>
        </div>

        <form v-on:submit.prevent="login">

          <!-- Username -->          
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-5">              
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fa fa-user"></i></div>
                </div>                
                <input 
                  v-model="user.username"
                  type="email" class="form-control" required>                
              </div>
              <small class="form-text text-muted">Ejemplo: correo@gmail.com</small>                
            </div>
            
          </div>

          <!-- Contrasena -->
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Contrasena</label>
            <div class="col-sm-5">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fa fa-key"></i></div>
                </div>                
                <input 
                  v-model="user.password"
                  type="password" class="form-control" required>                
              </div>              
            </div>
          </div>

          <!-- Enviar -->
          <div class="form-group row">
            <div class="offset-2 col-lg-5">
              <button type="submit" class="btn btn-primary btn-block">
                Entrar
              </button>
            </div>
          </div>


        </form>

      </div>
    </div>
    
  </div>
</template>
<script>
  const axios = require('axios')
  var qs = require('qs')
  export default {
    data(){
      return{
        error: '',
        user: {}
      }
    },
    methods: {
      login(){
        // console.log(this.user);
        let post =  qs.stringify({user: this.user});
        axios.post('/apiCliente/login/login.php',post).then(res => {
          console.log(res.data);
        });
        // this.$store.dispatch('retrieveToken', {
        //   username: this.user.username,
        //   password: this.user.password
        // }).then(response => {
        //   this.$router.push({ name: 'documentos' })
        // })
      }
    }
  }
</script>