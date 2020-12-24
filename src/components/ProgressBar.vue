<template>
  <v-progress-linear
    v-model="valueDeterminate"
    color="#1d3d3f"
    vertical
  ></v-progress-linear>
</template>

<script>
  export default {
    data () {
      return {
        valueDeterminate: 50,
      }
    },
  }
</script>

<style></style>
