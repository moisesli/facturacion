<template>
  <div>
    <input type="text" v-model="user.nombre" placeholder="user">
    <input type="text" v-model="user.password" placeholder="password">
    <button @click="login">enviar</button>
  </div>
</template>
<script>
  const axios = require('axios');
  var qs = require('qs');
  export default {
    data(){
      return{
        user: {}
      }
    },
    methods: {
      login(){
        this.$store.dispatch('retrieveToken', {}).then(response => {
          this.$router.push({ name: 'documentos' })
        })
      }
    }
  }
</script>