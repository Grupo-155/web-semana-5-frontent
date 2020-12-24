<template>
  
  <div>
    <v-container>
        <nav-bar></nav-bar>
        <comercial-ventas/>
    </v-container>
    <the-footer></the-footer>
    </div>
</template>

<script>
import ComercialVentas from '../components/ComercialVentas.vue';
import NavBar from '../components/NavBar.vue';
import TheFooter from '../components/TheFooter.vue';
export default {
    components:{
        NavBar,
        ComercialVentas,
        TheFooter

    }
};
</script>

<style></style>
