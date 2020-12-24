<template>
  <v-container class="">
    <v-card style="max-width: 286px; max-height: 550px">
      <v-img :src="member.image" class="card-img-top objetfit" alt="perfil" />
      
      <v-card-title class="display-1 text--primary ml-5 headline">{{member.codigo}} - {{member.nombre}}</v-card-title>
      <v-card-text>
        <p>{{member.descripcion}}</p>
        <ul >
          <li class="list ml-16">{{member.rol}}</li>
        </ul>

      </v-card-text>
      
    </v-card>
  </v-container>
</template>

<script>
    export default {
        name: "TeamCard",
        props: ["member"],
        data(){
          return{
            teamemb: null
          }
            
        }
        
    };
</script>

<style scoped>
  .objetfit{
    width: 286px;
    height: 280px;
    object-fit: cover;
  }
  .list{
    list-style: none;
  }
</style>
