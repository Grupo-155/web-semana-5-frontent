import Vue from 'vue';
import Vuex from 'vuex';
import jwtDecode from 'jwt-decode';
import router from '../router';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
  },
  mutations: {
    setToken(state, token){
      state.token = token;
    },
    setUsuario(state, usuario){
      state.user = usuario;
    }
  },
  actions:{
    saveToken({commit}, token){
      commit('setToken', token);
      commit('setUsuario', jwtDecode(token));
      localStorage.setItem('token', token)
    },
    userIsLogged({commit}){
      const token = localStorage.getItem('token');
      if (token) {
        commit('setToken', token);
        commit('setUsuario', jwtDecode(token));
      }
    },
    logOut({commit}){
      commit("setToken", null)
      commit("setUsuario", null)
      localStorage.removeItem('token');
      router.push({name: 'Home'})
    }
  }
})