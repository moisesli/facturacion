<template>
  <div>
    <input type="text" v-model="user.nombre" placeholder="user">
    <input type="text" v-model="user.password" placeholder="password">
    <button @click="enviar">enviar</button>
  </div>
</template>
<script>
  const axios = require('axios');
  export default {
    name: 'login',
    data(){
      return{
        user: {}
      }
    },
    methods: {
      enviar: function () {
        axios.get('/api/login').then(res => {
          localStorage.setItem('token',res.data.token)
          this.$router.push('panel')
          console.log(res.data.token);
        })
        // console.log(this.user);
      }
    }
  }
</script>