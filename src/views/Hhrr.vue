<template>
    <div>
    <v-container>
        <nav-bar></nav-bar>
        <human-resource/>
    </v-container>
    <the-footer></the-footer>
    </div>
</template>

<script>
import HumanResource from '../components/HumanResource.vue'
import NavBar from '../components/NavBar.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
  components: { HumanResource, NavBar, TheFooter },

}
</script>

<style>

</style>