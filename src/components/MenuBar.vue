<template>
  <v-app id="inspire">

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="" fixed dark temporary>
      <v-card class="mx-auto deep-purple accent-4" height="100%" width="256">
        <!-- <v-navigation-drawer v-model="drawer" class="deep-purple accent-4" dark temporary>  -->
        <v-list v-if="this.$store.state.user.rol ==='Administrador'">
          <!-- v-for="(item, index) in items" :key="index" -->
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            link
            :to="{ name: item.ruta }"
            exact
            
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title 
                >{{ item.title }} 
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <div class="pa-2">
          <v-btn
          block
          @click="salir()"
          > Logout </v-btn>
        </div>

        <!-- </v-navigation-drawer> -->
      </v-card>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "MenuBar",
  data: () => ({
    drawer: null,
    
    items: [
      { title: "Inicio", icon: "mdi-home", ruta: "Home" },
      {
        title: "Categorias",
        icon: "mdi-notification-clear-all",
        ruta: "Categoria",
      },
      { title: "Articulos", icon: "mdi-shopping", ruta: "Articulo" },
      { title: "Usuarios", icon: "mdi-account-box", ruta: "Usuario" },
    ],
    links: ["Categorias", "Articulos", "Usuarios"],
    mini: true,
  }),
  created(){
    this.$store.dispatch('userIsLogged')
  },
  methods:{
    salir(){
      this.$store.dispatch('logOut');
    }
  }
  
  
};
</script>

<style scoped>
</style>