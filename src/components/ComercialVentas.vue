<template>
  <v-container>
    <v-row class="mt-12">
      <h1 class="display-2">
        <span style="color: teal">Acelera tu ciclo de ventas</span> y mejora la productividad de tus equipos comerciales
      </h1>
    </v-row>
    <v-row class="mt-16">
      <v-col class="services-col" style="width: 550px">
        <div class="services-img mt-12 mr-12" style="width: 550px">
          <v-img :src="require('../assets/image-agiliza.png')" width="550" />
        </div>
      </v-col>
      <v-col >
          <v-row style="height: 150px"></v-row>        
          <v-row>
            <h2><span style="color: teal">Agiliza</span> los procesos de gestión comercial</h2>
            <p class="mt-12">Reduce el ciclo de venta a un solo día - firma de ofertas, contratos de compraventa o renovaciones - incorporando la firma electrónica en tu departamento de ventas. Venderás más, y más rápido.</p>
          </v-row>
      </v-col>
    </v-row>
    
    <v-row class="mt-16">
        <v-col >
          <v-row style="height: 150px"></v-row>        
          <v-row>
            <h2><span style="color: teal">Facilita la firma</span>  de contratos comerciales a tus clientes o proveedores</h2>
            <p class="mt-12">Cualquier propuesta, contrato de compraventa o distribución puede firmarse online, en cualquier momento y lugar. Evita desplazamientos innecesarios a tus clientes y proveedores, o que tengan que imprimir el contrato para firmarlo.</p>
          </v-row>
      </v-col>
      <v-col class="services-col" style="width: 550px">
        <div class="services-img mt-12 mr-12" style="width: 550px">
          <v-img :src="require('../assets/image-facilita.png')" width="550"  />
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-16">
      <v-col class="services-col" style="width: 550px">
        <div class="services-img mt-12 mr-12" style="width: 550px">
          <v-img :src="require('../assets/image-legalidad.png')" width="550"  />
        </div>
      </v-col>
      <v-col >
          <v-row style="height: 150px"></v-row>        
          <v-row>
            <h2>Máxima <span style="color: teal">legalidad y protección</span> de datos</h2>
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