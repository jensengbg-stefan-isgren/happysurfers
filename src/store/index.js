import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {},
  actions: {
    async getProducts(context) {
      const URL = "localhost:5000/api/beans";
      let response = await fetch(URL, { method: "GET" });
      let data = response.json();
      context.commit()
    }
  },
  modules: {}
});
