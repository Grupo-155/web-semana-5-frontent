<template>
  <v-row class="mt-10">
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
            src="https://www.signaturit.com/wp-content/uploads/2020/12/email-certificado-video-ES.mp4"
          />
        </video>
      </v-col>

      <v-col class="banner-text" >
          <v-row style="height: 80px"></v-row>
        <h1 class="display-2" style="color: #1d3d3f">Email certificado: digitaliza comunicaciones certificadas</h1>
        <h3 style="color: teal">
          Garantiza que tus clientes o empleados reciben tus comunicados y documentos de forma fehaciente
        </h3>
      </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'EmailCertificado',
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