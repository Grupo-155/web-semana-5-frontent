<template>
  <v-row class="" no-gutters>
      <v-col md="2">
        <router-link to="/">
          <v-img
            :src="require('../assets/Frame.svg')"
            class="my-3"
            contain
            height="50"
          />
        </router-link>
      </v-col>
      <v-col md="" class="" offset-md="1">
        <v-bottom-navigation
          
          class=" grey lighten-2 between"
          style="color: #1d3d3f"
          horizontal
        >
          <v-menu  offset-y>
            <template v-slot:activator="{ attrs, on }">
              <v-btn class="" style="width:100%" v-bind="attrs" v-on="on">
                Soluciones
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(solucion, index) in soluciones" :key="index" :to="{ name: solucion.ruta }" link>
                <v-list-item-title v-text="solucion.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu offset-y>
            <template v-slot:activator="{ attrs, on }">
              <v-btn class="" style="width:100%" v-bind="attrs" v-on="on">
                Productos
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(producto, index) in productos" :key="index" :to="{ name:producto.ruta }" link>
                <v-list-item-title v-text="producto.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn style="width:100%" to="/about">
            <span>Sobre Nosotros</span>

            <v-icon></v-icon>
          </v-btn>

          <v-btn style="width:100%;" to="/login">
            <span>Iniciar Sesión</span>

            <v-icon>mdi-login</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        soluciones: [
          {text: "Recursos Humanos", ruta: 'Hhrr'},
          {text:"Comercial", ruta: 'Comercial'},
          {text: "Ventas", ruta: 'Legal'}
        ],
        productos: [
          {text: "Firma Electrónica", ruta: 'Efirma'},
          {text:"Email Certificado", ruta: 'Ecertificado'},
          {text:"Identidad Electrónica", ruta: 'Eidentidad'}
          ]
    })
}
</script>

<style>

</style>