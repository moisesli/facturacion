<template>
  <div>
    <h1>Logout</h1>
  </div>
</template>

<script>
  export default {
    name: 'logout',
    created() {
      localStorage.removeItem('token');
      this.$router.push('login')
    }
  }
</script>