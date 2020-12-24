<template>
  <v-card class="mx-auto" style="border-radius:10px" outlined max-width="500">
    <v-card-text >
      
      <p class="display-1 text--primary" >
        {{title}}
      </p>
      
      <div  class="text--primary">
        {{text}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="teal accent-4" @click="reveal = true">
        Aprende mas
      </v-btn>
    </v-card-actions>

    
  </v-card>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
  }),
  props: ["title", "text"]
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
