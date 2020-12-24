<template>
    <div>
    <v-container>
        <nav-bar></nav-bar>
        <firma-electronica></firma-electronica>
    </v-container>
    <the-footer></the-footer>
    </div>
  
</template>

<script>
import FirmaElectronica from '../components/FirmaElectronica.vue'
import TheFooter from '../components/TheFooter.vue';
import NavBar from '../components/NavBar.vue';
export default {
  components: { FirmaElectronica, TheFooter, NavBar },

}
</script>

<style>

</style>