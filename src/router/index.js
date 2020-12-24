import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      public: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/hhrr',
    name: 'Hhrr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hhrr" */ '../views/Hhrr.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/comercial',
    name: 'Comercial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "comercial" */ '../views/Comercial.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/legal',
    name: 'Legal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "legal" */ '../views/Legal.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/efirma',
    name: 'Efirma',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "efirma" */ '../views/Efirma.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/ecertificado',
    name: 'Ecertificado',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ecertificado" */ '../views/Ecertificado.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/eidentidad',
    name: 'Eidentidad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "eidentidad" */ '../views/Eidentidad.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/secure',
    name: 'Secure',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "secure" */ '../views/Secure.vue'),
    meta:{
      auth: true
    },
    children:[
      {
        path: 'categoria',
        name: 'Categoria',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
        meta:{
          auth: true
        }
      },
      {
        path: 'usuario',
        name: 'Usuario',
        
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue'),
        meta:{
          auth: true,
          administrador: true,
          vendedor: true,

        }
      },
      {
        path: 'articulo',
        name: 'Articulo',
        
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "articulo" */ '../views/Articulo.vue'),
        meta:{
          auth: true
        }
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  if (to.matched.some(record => record.meta.public)) {
    next();
  } else if(to.matched.some(record => record.meta.auth)){//record.meta.administrador
    if (store.state.user) {//&& store.state.user.rol == 'Administrador'
      next()
    }else{
      next({name: 'Login'})
    }
  }else{
    next();
  }
})

export default router
