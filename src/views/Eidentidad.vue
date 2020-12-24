<template>
    <div>
    <v-container>
        <nav-bar></nav-bar>
        <identificacion-electronica></identificacion-electronica>
    </v-container>
    <the-footer></the-footer>
    </div>
</template>

<script>
import IdentificacionElectronica from '../components/IdentificacionElectronica.vue'
import TheFooter from '../components/TheFooter.vue';
import NavBar from '../components/NavBar.vue';
export default {
  components: { IdentificacionElectronica, NavBar,TheFooter },

}
</script>

<style>

</style>