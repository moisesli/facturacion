<template>
  <div>
    <input type="text" v-model="user.username" placeholder="user">
    <input type="text" v-model="user.password" placeholder="password">
    <button @click="login">enviar</button>
  </div>
</template>
<script>
  const axios = require('axios');
  export default {
    data(){
      return{
        user: {}
      }
    },
    methods: {
      login(){
        this.$store.dispatch('retrieveToken', {
          username: this.user.username,
          password: this.user.password
        }).then(response => {
          this.$router.push({ name: 'documentos' })
        })
      }
    }
  }
</script>