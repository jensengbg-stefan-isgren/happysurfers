import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    addProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async getProducts(context) {
      const URL = "http://localhost:5000/api/beans";
      try {
        let response = await fetch(URL, { method: "GET" });
        let data = await response.json();
        context.commit("addProducts", data);
      } catch (error) {
        console.log("Error trying to fetch data", error);
      }
    }
  },
  modules: {}
});
