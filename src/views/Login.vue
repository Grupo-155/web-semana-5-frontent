<template>
  <v-container>
    <nav-bar></nav-bar>
    <the-login></the-login>
  </v-container>
</template>

<script>
import TheLogin from '../components/auth/TheLogin.vue'
import NavBar from '../components/NavBar.vue'
export default {
    components:{
        TheLogin,
        NavBar
    }
}
</script>

<style scoped>

</style>