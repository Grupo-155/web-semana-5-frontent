<!--CREAR LA PASSWORD EN USUARIO-->
<template>
  <v-data-table
    :headers="headersInfo"
    :items="informacion"
    sort-by="nombre"
    class="elevation-1"
    :loading="cargando"
    loading-text="Cargando... Por favor espere"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>
          {{
            ruta
              .trim()
              .toLowerCase()
              .replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
              )
          }}</v-toolbar-title
        >

        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Agregar {{ ruta }}
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }} {{ ruta }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!--columnas para categoria-->
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'categoria'">
                    <v-text-field
                      v-model="editedCategoryItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="8" v-if="ruta == 'categoria'">
                    <v-textarea
                      v-model="editedCategoryItem.descripcion"
                      label="Descripcion"
                      counter="254"
                      no-resize
                      auto-grow
                    ></v-textarea>
                  </v-col>
                  <!--Columnas para articulo-->
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'articulo'">
                    <v-text-field
                      v-model="editedArticleItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'articulo'">
                    <v-text-field
                      v-model="editedArticleItem.descripcion"
                      label="Descripcion"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'articulo'">
                    <v-text-field
                      v-model="editedArticleItem.codigo"
                      label="Codigo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'articulo'">
                    <v-select 
                      v-model="categoriaSelect"
                      :items="categorias"
                      item-text="nombre"
                      item-value="id"
                      return-object
                      menu-props="auto"
                      label="Categorias"
                      hide-details
                      single-line
                    ></v-select>
                  </v-col>
                  <!-- <v-col cols="12" sm="6" md="4" v-if="ruta == 'articulo'">
                    <v-text-field
                      v-model="editedArticleItem.categoria.nombre"
                      label="Categoria"
                    ></v-text-field>
                  </v-col> -->
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'articulo'">
                    <v-text-field
                      v-model="editedArticleItem.precio_venta"
                      label="Precio de venta"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'articulo'">
                    <v-text-field
                      v-model="editedArticleItem.stock"
                      label="Stock"
                    ></v-text-field>
                  </v-col>
                  <!--Columnas para usuario-->
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'usuario'">
                    <v-text-field
                      v-model="editedUserItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'usuario'">
                    <v-text-field
                      v-model="editedUserItem.rol"
                      label="Rol"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'usuario'">
                    <v-text-field
                      v-model="editedUserItem.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'usuario'">
                    <v-text-field
                      v-model="editedUserItem.password"
                      label="Password"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'usuario'">
                    <v-text-field
                      v-model="editedUserItem.tipo_documento"
                      label="Tipo de Documento"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'usuario'">
                    <v-text-field
                      v-model="editedUserItem.num_documento"
                      label="Numero de documento"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="ruta == 'usuario'">
                    <v-text-field
                      v-model="editedUserItem.telefono"
                      label="Telefono"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancelar
              </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="600px">
          <v-card>
            <v-card-title class="headline"
              >Está seguro que desea deshabilitar {{ genero }}
              {{ ruta }}?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancelar</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >Aceptar</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <!-- <pre>{{$data.categorias}}</pre> -->
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> {{ iconShow }} </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  name: 'SecureComponent',
  data: () => ({
    titulo: ["Articulos", "Categorias", "Usuarios"],
    dialog: false,
    dialogDelete: false,
    cargando: true,
    iconShow: "mdi-eye",
    //toggleIcon: "mdi-eye",
    headers:[],
    headersCategoria: [
      {
        text: "Nombre",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    headersArticulo:[
      {
        text: "Nombre",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      {text: "Descripcion", value: "descripcion" },
      {text: "Codigo", value: "codigo"},
      {text: "Categoria", value: "categoria.nombre"},
      {text: "Precio de Venta", value: "precio_venta"},
      {text:"Stock", value: "stock"},
      {text: "Estado", value: "estado" },
      {text: "Actions", value: "actions", sortable: false },
    ],
    headersUsuario:[
      {
        text: "Nombre",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      {text: "Rol", value: "rol" },
      {text: "Tipo de documento", value: "tipo_documento"},
      {text: "Numero de documento", value: "num_documento"},
      {text:"Direccion", value: "direccion"},
      {text:"Telefono", value: "telefono"},
      {text: "Estado", value: "estado" },
      {text: "Actions", value: "actions", sortable: false }
      
    ],

    informacion: [],
    categorias:[],
    categoriaSelect:'',
    editedIndex: -1,
    
    editedItem: {
      nombre: "",
      descripcion: "",
    },
    defaultItem: {
      nombre: "",
      descripcion: "",
    },
    //prueba
    editedCategoryItem: {
      id: Number,
      nombre: "",
      descripcion: "",
    },
    defaultCategoryItem: {
      id:Number,
      nombre: "",
      descripcion: "",
    },
    editedArticleItem: {
      nombre: "",
      descripcion: "",
      codigo: "",
      categoria: {id:0,nombre:""},
      precio_venta: null,
      stock: null,
    },
    defaultArticleItem: {
      nombre: "",
      descripcion: "",
      codigo: "",
      categoria: {id:0,nombre:""},
      precio_venta: null,
      stock: null,
    },
    editedUserItem: {
      nombre: "",
      rol: "",
      email: "",
      password: "",
      tipo_documento: "",
      num_documento: "",
      direccion: "",
      telefono: "",
    },
    defaultUserItem: {
      nombre: "",
      rol: "",
      email: "",
      password: "",
      tipo_documento: "",
      num_documento: "",
      direccion: "",
      telefono: "",
    },
  }),
  props: ["ruta"],

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar" : "Editar";
    },
    genero() {
      if (this.ruta === "usuario" || this.ruta == "articulo") {
        return "este";
      } else {
        return "esta";
      }
    },
    headersInfo(){
      if (this.ruta === "usuario") {
        return this.headersUsuario;
      } else if (this.ruta == "categoria") {
        return this.headersCategoria;
      }else{
        return this.headersArticulo;
      }
    }
    
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    
    this.list(this.ruta);
    this.listCategorias()
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
      ];
    },
    list(endpoint) {
      axios.get(`https://thawing-hollows-65098.herokuapp.com/api/${endpoint}/list`,{
        headers: {
          token: this.$store.state.token
        }
      })
        .then((response) => {
          this.informacion = response.data; //ruta obtiene el nombre categoria, ussuario o articulo
          this.cargando = false;
        })
        .catch((error) => {
          return error;
        });
    },
    listCategorias(){
      axios.get(`https://thawing-hollows-65098.herokuapp.com/api/categoria/list`, {
        headers: {
          token: this.$store.state.token
          }
        })
        .then((response) => {
          this.categorias = response.data; //ruta obtiene el nombre categoria, ussuario o articulo
          this.cargando = false;
        })
        .catch((error) => {
          return error;
        });
    },

    editItem(item) {
      this.editedIndex = item.id; //this.categorias.indexOf(item)
      if (this.ruta == "categoria") {
        this.editedCategoryItem = Object.assign({}, item);
      } else if (this.ruta == "articulo") {
        this.categoriaSelect = item ? item.categoriaId : '';
        console.log(this.categoriaSelect)   
        this.editedArticleItem = Object.assign({}, item);
      } else {
        this.editedUserItem = Object.assign({}, item);
      }

      this.dialog = true;
      
    },

    deleteItem(item) {
      this.editedIndex = item.id; //this.categorias.indexOf(item)
      if (this.ruta == "categoria") {
        this.editedCategoryItem = Object.assign({}, item);
      } else if (this.ruta == "articulo") {
        this.editedArticleItem = Object.assign({}, item);
      } else {
        this.editedUserItem = Object.assign({}, item);
      }
      this.dialogDelete = true;
      if(this.iconShow == 'mdi-eye'){
        this.iconShow = "mdi-eye-off";
      }else{
        this.iconShow = "mdi-eye"
      }
    },

    deleteItemConfirm() {
      
      if (this.ruta == "categoria") {
        if (this.editedCategoryItem.estado === 1) {
          axios.put(`https://thawing-hollows-65098.herokuapp.com/api/${this.ruta}/deactivate`, {
              id: this.editedCategoryItem.id,
            },
            {
            headers: {
              token: this.$store.state.token
              }
            })
            .then((response) => {
              console.log(response);
              this.list(this.ruta);
              
            })
            .catch((error) => {
              console.log(error);
              return error;
            });
        } else {
          axios.put(`https://thawing-hollows-65098.herokuapp.com/api/${this.ruta}/activate`, {
              id: this.editedCategoryItem.id,
            },
            {
            headers: {
              token: this.$store.state.token
              }
            }
            )
            .then((response) => {
              console.log(response);
              this.list(this.ruta);
            })
            .catch((error) => {
              console.log(error);
              return error;
            });
        }
      } else if (this.ruta == "articulo") {
        if (this.editedArticleItem.estado === 1) {
          axios.put(`https://thawing-hollows-65098.herokuapp.com/api/${this.ruta}/deactivate`, {
              id: this.editedArticleItem.id,
            },
            {
            headers: {
              token: this.$store.state.token
              }
            }
            )
            .then((response) => {
              console.log(response);
              this.list(this.ruta);
            })
            .catch((error) => {
              console.log(error);
              return error;
            });
        } else {
          axios.put(`https://thawing-hollows-65098.herokuapp.com/api/${this.ruta}/activate`, {
              id: this.editedArticleItem.id,
            },
            {
            headers: {
              token: this.$store.state.token
              }
            }
            )
            .then((response) => {
              console.log(response);
              this.list(this.ruta);
            })
            .catch((error) => {
              console.log(error);
              return error;
            });
        }
      } else {
        if (this.editedUserItem.estado === 1) {
          axios.put(`https://thawing-hollows-65098.herokuapp.com/api/${this.ruta}/deactivate`, {
              id: this.editedUserItem.id,
            },
            {
            headers: {
              token: this.$store.state.token
              }
            }
            )
            .then((response) => {
              console.log(response);
              this.list(this.ruta);
              
            })
            .catch((error) => {
              console.log(error);
              return error;
            });
        } else {
          axios.put(`https://thawing-hollows-65098.herokuapp.com/api/${this.ruta}/activate`, {
              id: this.editedUserItem.id,
            },
            {
            headers: {
              token: this.$store.state.token
              }
            })
            .then((response) => {
              console.log(response);
              this.list(this.ruta);
            })
            .catch((error) => {
              console.log(error);
              return error;
            });
        }
      }
      if (this.editedIndex > -1) {
        // Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        //agregar un objeto

        if (this.ruta == "categoria") {
          objetoEditado.id = this.editedCategoryItem.id;
          objetoEditado.nombre = this.editedCategoryItem.nombre;
          objetoEditado.descripcion = this.editedCategoryItem.descripcion;
        } else if (this.ruta == "articulo") {
          objetoEditado.id = this.editedArticleItem.id;
          objetoEditado.nombre = this.editedArticleItem.nombre;
          objetoEditado.descripcion = this.editedArticleItem.descripcion;
          objetoEditado.categoria = this.this.categoriaSelect.id;
          //objetoEditado.categoriaId = this.categoriaSelect.id;
          objetoEditado.codigo = this.editedArticleItem.codigo;
          objetoEditado.precio_venta = this.editedArticleItem.precio_venta;
          objetoEditado.stock = this.editedArticleItem.stock;
        } else {
          objetoEditado.id = this.editedUserItem.id;
          objetoEditado.nombre = this.editedUserItem.nombre;
          objetoEditado.rol = this.editedUserItem.rol;
          objetoEditado.email = this.editedUserItem.email;
          objetoEditado.password = this.editedUserItem.password;
          objetoEditado.tipo_documento = this.editedUserItem.tipo_documento;
          objetoEditado.num_documento = this.editedUserItem.num_documento;
          objetoEditado.direccion = this.editedUserItem.direccion;
          objetoEditado.telefono = this.editedUserItem.telefono;
        }
        //añadir objeto
        axios.post(`https://thawing-hollows-65098.herokuapp.com/api/${this.ruta}/add`, objetoEditado,
        {
            headers: {
              token: this.$store.state.token
              }
            }
        ) //añadir los objetos con los if
          .then((response) => {
            console.log(response);
            this.list(this.ruta);
            objetoEditado = new Object();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
        //this.desserts.push(this.editedItem)
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        //this.editedItem = Object.assign({}, this.defaultItem)
        if (this.ruta == "categoria") {
          this.editedCategoryItem = Object.assign({}, this.defaultCategoryItem);
        } else if (this.ruta == "articulo") {
          this.editedArticleItem = Object.assign({}, this.defaultArticleItem);
          this.categoriaSelect = '';
        } else {
          this.editedUserItem = Object.assign({}, this.defaultUserItem);
        }
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        if (this.ruta == "categoria") {
          this.editedCategoryItem = Object.assign({}, this.defaultCategoryItem);
        } else if (this.ruta == "articulo") {
          this.editedArticleItem = Object.assign({}, this.defaultArticleItem);
        } else {
          this.editedUserItem = Object.assign({}, this.defaultUserItem);
        }
        this.editedIndex = -1;
      });
    },

    save() {
      const objetoEditado = new Object();
      if (this.ruta == "categoria") {
        objetoEditado.id = this.editedCategoryItem.id;
        objetoEditado.nombre = this.editedCategoryItem.nombre;
        objetoEditado.descripcion = this.editedCategoryItem.descripcion;
      } else if (this.ruta == "articulo") {
        objetoEditado.id = this.editedArticleItem.id;
        objetoEditado.nombre = this.editedArticleItem.nombre;
        objetoEditado.descripcion = this.editedArticleItem.descripcion;
        objetoEditado.codigo = this.editedArticleItem.codigo;
        objetoEditado.categoria = this.categoriaSelect.id;
        //objetoEditado.categoriaId = this.categoriaSelect.id;
        objetoEditado.precio_venta = this.editedArticleItem.precio_venta;
        objetoEditado.stock = this.editedArticleItem.stock;
      } else {
        objetoEditado.id = this.editedUserItem.id;
        objetoEditado.nombre = this.editedUserItem.nombre;
        objetoEditado.rol = this.editedUserItem.rol;
        objetoEditado.email = this.editedUserItem.email;
        objetoEditado.password = this.editedUserItem.password;
        objetoEditado.tipo_documento = this.editedUserItem.tipo_documento;
        objetoEditado.num_documento = this.editedUserItem.num_documento;
        objetoEditado.direccion = this.editedUserItem.direccion;
        objetoEditado.telefono = this.editedUserItem.telefono;
      }
      if (this.editedIndex > -1) {
        axios.put(`https://thawing-hollows-65098.herokuapp.com/api/${this.ruta}/update`, objetoEditado,
        {
          headers: {
            token: this.$store.state.token
            }
          }
        )
          .then((response) => {
            console.log(response);
            this.list(this.ruta);
            objetoEditado = new Object();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });

        // Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        //agregar un objeto

        if (this.ruta == "categoria") {
          objetoEditado.id = this.editedCategoryItem.id;
          objetoEditado.nombre = this.editedCategoryItem.nombre;
          objetoEditado.descripcion = this.editedCategoryItem.descripcion;
        } else if (this.ruta == "articulo") {
          objetoEditado.id = this.editedArticleItem.id;
          objetoEditado.nombre = this.editedArticleItem.nombre;
          objetoEditado.descripcion = this.editedArticleItem.descripcion;
          objetoEditado.codigo = this.editedArticleItem.codigo;
          objetoEditado.categoria = this.this.categoriaSelect.id;
          //objetoEditado.categoriaId = this.categoriaSelect.id;
          objetoEditado.precio_venta = this.editedArticleItem.precio_venta;
          objetoEditado.stock = this.editedArticleItem.stock;
        } else {
          objetoEditado.id = this.editedUserItem.id;
          objetoEditado.nombre = this.editedUserItem.nombre;
          objetoEditado.rol = this.editedUserItem.rol;
          objetoEditado.email = this.editedUserItem.email;
          objetoEditado.password = this.editedUserItem.password;
          objetoEditado.tipo_documento = this.editedUserItem.tipo_documento;
          objetoEditado.num_documento = this.editedUserItem.num_documento;
          objetoEditado.direccion = this.editedUserItem.direccion;
          objetoEditado.telefono = this.editedUserItem.telefono;
        }
        //añadir objeto
        axios.post(`https://thawing-hollows-65098.herokuapp.com/api/${this.ruta}/add`, objetoEditado,
        {
          headers: {
            token: this.$store.state.token
            }
          }
        ) //añadir los objetos con los if
          .then((response) => {
            console.log(response);
            this.list(this.ruta);
            objetoEditado = new Object();
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
        //this.desserts.push(this.editedItem)
      }
      this.close();
    },
  },
};
</script>

<style scoped>
</style>