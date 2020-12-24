<template>
  <v-app id="inspire" style="width: 105%;">
    <v-main class="grey lighten-2">
        <router-view></router-view>
    </v-main>
  </v-app>
  
</template>

<script>


export default {
  name: "App",

  methods: {
    
    // menuRoute(index) {
    //   if (index == 0) {
    //     this.$router.push("/")
    //   }
    //   if(index == 1){
    //     this.$router.push("/categoria");  
    //   }
      
    // }
  }
}
</script>
