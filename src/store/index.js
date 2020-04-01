import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import menu from "./modules/menu";
import order from "./modules/order";
import products from "./modules/products";
import shoppingCart from "./modules/shoppingCart";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    menu,
    user,
    order,
    products,
    shoppingCart
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});
