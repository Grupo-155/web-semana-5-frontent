<template>
  <div>
    <v-container>
        <nav-bar></nav-bar>
        <email-certificado></email-certificado>
    </v-container>
    <the-footer></the-footer>
    </div>
</template>

<script>
import EmailCertificado from '../components/EmailCertificado.vue';
import TheFooter from '../components/TheFooter.vue';
import NavBar from '../components/NavBar.vue';
export default {
    components: { EmailCertificado, NavBar,TheFooter },
}
</script>

<style>

</style>
