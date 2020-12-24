<template>
  <v-container>
    <v-row class="mt-12">
      <h1 class="display-1">
        Dedica menos tiempo a tareas administrativas y
        <span style="color: teal">más a cuidar tus empleados</span>
      </h1>
    </v-row>
    <v-row class="mt-16">
      <v-col class="services-col" style="width: 550px">
        <div class="services-img mt-12 mr-12" style="width: 550px">
          <v-img :src="require('../assets/Automatización-de-procesos-de-gestión-laboral.png')" width="550" style="border-radius: 20px" />
        </div>
      </v-col>
      <v-col >
          <v-row style="height: 150px"></v-row>        
          <v-row>
            <h2><span style="color: teal">Automatización</span> de procesos de gestion laboral</h2>
            <p class="mt-12">Facilita que tus empleados firmen cualquier documento laboral, desde cualquier lugar y desde cualquier dispositivo: ordenador, tablet o móvil. Y olvídate de perseguirlos para que te devuelvan los documentos firmados.</p>
          </v-row>
      </v-col>
    </v-row>
    
    <v-row class="mt-16">
        <v-col >
          <v-row style="height: 150px"></v-row>        
          <v-row>
            <h2><span style="color: teal">Rapidez y efectividad</span> en la firma de documentos laborales</h2>
            <p class="mt-12">Agiliza cualquier proceso de selección, onboarding u offboarding incorporando la firma electrónica (con biometría o certificado digital) y el email certificado en tu departamento de recursos humanos.</p>
          </v-row>
      </v-col>
      <v-col class="services-col" style="width: 550px">
        <div class="services-img mt-12 mr-12" style="width: 550px">
          <v-img :src="require('../assets/rapidez-y-efectividad-1.png')" width="550" style="border-radius: 20px" />
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-16">
      <v-col class="services-col" style="width: 550px">
        <div class="services-img mt-12 mr-12" style="width: 550px">
          <v-img :src="require('../assets/legalidadyproteccion.png')" width="550" style="border-radius: 20px" />
        </div>
      </v-col>
      <v-col >
          <v-row style="height: 150px"></v-row>        
          <v-row>
            <h2><span style="color: teal">Automatización</span> de procesos de gestion laboral</h2>
            <p class="mt-12">Facilita que tus empleados firmen cualquier documento laboral, desde cualquier lugar y desde cualquier dispositivo: ordenador, tablet o móvil. Y olvídate de perseguirlos para que te devuelvan los documentos firmados.</p>
          </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
.services-col{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>