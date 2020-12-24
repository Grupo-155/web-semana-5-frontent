<template>
  <v-container>
    <nav-bar></nav-bar>
    <v-row class="mt-10 ">
      <v-col v-for="(item, index) of team" :key="index">
        <team-card v-bind:member="item"></team-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TeamCard from "../components/TeamCard";
import NavBar from "../components/NavBar";
export default {
  components: {
    TeamCard,
    NavBar,
  },
  data() {
    return {
      team: [
        {
          codigo: 1,
          nombre: "José R. Castillo",
          descripcion:
            "Ingeniero electrónico egresado de la universidad popular del Cesar",
          rol: "Desarrollador Full-Stack",
          image:
            "https://github.com/Grupo-155/Web-semana-4-frontend/blob/master/src/assets/Perfiljr.jpg?raw=true",
        },
        {
          codigo: 2,
          nombre: "Jorge Polo",
          descripcion:
            "Tecnologo en electónica y comunicaciones egresado de la UMNG",
          rol: "Desarrollador Front-End",
          image:
            "https://github.com/Grupo-155/Web-semana-4-frontend/blob/master/src/assets/Jorge.jpg?raw=true",
        },
        {
          codigo: 3,
          nombre: "Ariaden Gamboa",
          descripcion:
            "ingeniera de sistemas egresada de la universidad cooperativa de Colombia",
          rol: "Arquitecto de Software",
          image:
            "https://github.com/Grupo-155/Web-semana-4-frontend/blob/master/src/assets/Ariaden.jpg?raw=true",
        },
        {
          codigo: 4,
          nombre: "Erick Parra",
          descripcion:
            "Ingeniero industrial egresado de la universidad de la Salle",
          rol: "Scrum Master",
          image:
            "https://github.com/Grupo-155/Web-semana-4-frontend/blob/master/src/assets/Erick.jpg?raw=true",
        },
      ],
    };
  },
};
</script>
