<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-row align="center" align-content="center" class="Login-row">
          <v-col>
            <v-card class="pa-5">
              <v-card-title class="display-1">
                Login
              </v-card-title>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="login.email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  clearable
                  outlined
                ></v-text-field>

                <v-text-field
                  v-model="login.password"
                  label="Password"
                  required
                  outlined
                  type="password"
                ></v-text-field>

                <v-btn
                  :disabled="!(this.login.email && this.login.password)"
                  color="success"
                  class="mr-4"
                  block
                  @click="loginUser"
                >
                  Ingresar
                </v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import swal from "sweetalert";
import vueJwtDecode from "vue-jwt-decode";
import axios from "axios";

export default {
  name: "SecureComponent",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  beforeCreate() {
    this.$store.dispatch("userIsLogged")? this.$router.push('/secure'): this.$router.push('/login');
  },
  methods: {
    async loginUser() {
      axios
        .post("https://thawing-hollows-65098.herokuapp.com/api/usuario/login", this.login)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.$store.dispatch("saveToken", data.tokenReturn);
          this.$router.push({ name: "Secure" });
          console.log(data);
          swal(
            "Acceso permitido",
            `Los datos de usuario son correctos, ¡Bienvenido usuario!`,
            "success"
          );
        })
        .catch((error) => {
          console.log(error);
          swal(
            "Acceso denegado",
            "Los datos de usuario son incorrectos",
            "error"
          );
          return error;
        });
    },
  },
};
</script>

<style scoped>
.Login-row {
  height: 70vh;
}
</style>
