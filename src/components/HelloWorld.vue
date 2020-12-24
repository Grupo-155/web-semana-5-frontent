<template>
  <div>
    <v-container>
      <nav-bar></nav-bar>
    </v-container>
    <v-row>
      <v-col>
        <video
          class="video grey"
          preload="none"
          playsinline=""
          autoplay=""
          muted=""
          loop=""
        >
          <source
            type="video/mp4"
            src="https://www.signaturit.com/wp-content/uploads/2020/12/firma-avanzada-video-ES-2.mp4"
          />
        </video>
      </v-col>

      <v-col class="banner-text">
        <h1>Firma electrónica: agiliza tus procesos de negocio</h1>
        <p>
          Consigue cerrar acuerdos online con rapidez y con todas las garantías
          legales.
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center" style="margin-top: -25px">
      <v-col cols="12">
        <v-carousel
          cycle
          height="700"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item 
          v-for="(rutas, index) in rutas"
          :key="index" 
          :src="rutas.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
          >
          
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-row>
        <v-col>
          <v-row>
            <the-cards
              title="Envia"
              text="Enviar un contrato a firmar nunca había sido tan fácil y rápido. Configúralo desde nuestra plataforma."
              class="mb-5 cardText"
            />
          </v-row>
          <v-row>
            <the-cards
              title="Firma"
              text="Firma biométrica o con certificado digital, desde cualquier dispositivo y sin ninguna app adicional."
              class="mb-5 cardText"
            />
          </v-row>
          <v-row>
            <the-cards
              title="Gestiona"
              text="Monitoriza el proceso de firma en tiempo real y almacena tus contratos con seguridad."
              class="mb-5 cardText"
            />
          </v-row>
        </v-col>
        <v-col class="services-col">
          <div class="services-img mt-12 mr-12">
            <v-img
              :src="require('../assets/envia.png')"
              width="750"
            />
          </div>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import TheCards from "./TheCards.vue";
import NavBar from "./NavBar.vue";
export default {
  name: "HelloWorld",
  components: {
    TheCards,
    NavBar,
  },
  data: () => ({
    length: 3,
    window: 0,
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
    ],
    
    rutas:[
      {src:'https://github.com/Grupo-155/Web-semana-4-frontend/blob/master/src/assets/testimonial1.png?raw=true'},
      {src:'https://github.com/Grupo-155/Web-semana-4-frontend/blob/master/src/assets/testimonial2.png?raw=true'},
      {src:'https://github.com/Grupo-155/Web-semana-4-frontend/blob/master/src/assets/testimonial3.png?raw=true'}
      ],
    
  }),
};
</script>
<style scoped>
.banner-text {
  padding-top: 100px;
  font-size: 1.5em;
  color: #1d3d3f;
}
.video {
  width: 80%;
  margin-bottom: 5%;
  margin-left: 10%;
  margin-top: 10px;

  border-radius: 10px;
}
.between {
  justify-content: space-around !important;
}
.cardText {
  text-align: justify;
}
.services-col{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
