<template>
  <div>
    <h1>Logout</h1>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('destroyToken').then(response => {
        this.$router.push({ name: 'login' })
      })
    }
  }
</script>