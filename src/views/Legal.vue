<template>
    <div>
        <v-container>
            <nav-bar></nav-bar>
            <legal-component/>
        </v-container>
        <the-footer></the-footer>
    </div>
</template>

<script>
import LegalComponent from '../components/LegalComponent.vue'
import NavBar from '../components/NavBar.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
    components: { LegalComponent, NavBar, TheFooter },
}
</script>

<style>

</style>