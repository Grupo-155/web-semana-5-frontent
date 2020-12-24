<template>
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
            src="https://www.signaturit.com/wp-content/uploads/2020/12/identificacio%CC%81n-video-ES-1.mp4"
          />
        </video>
      </v-col>

      <v-col class="banner-text">
          <v-row style="height: 80px"></v-row>
        <h1 class="display-2">Identificación electrónica: la mejor prevención contra el fraude digital</h1>
        <h3 style="color:teal;">
          Valida la identidad de tus clientes o usuarios en menos de 30 segundos.
        </h3>
      </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'IdentificacionElectronica',
    data: () => ({

    })
}
</script>

<style>
.video {
  width: 100%;
  margin-bottom: 5%;
  margin-left: -10%;
  margin-top: 10px;

  border-radius: 10px;
}
</style>