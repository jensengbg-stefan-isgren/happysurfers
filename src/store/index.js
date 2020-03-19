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
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    showShoppingCart(state, cartItems) {
      state.cart = cartItems;
    },
    updateCart(state, product) {
      console.log(state, product);
      product.quantity++;
    }
  },
  actions: {
    async getProducts(context) {
      const URL = "http://localhost:5000/api/beans";
      try {
        let response = await fetch(URL, { method: "GET" });
        let data = await response.json();
        console.log(data);
        context.commit("addProducts", data);
      } catch (error) {
        console.log("Error trying to fetch data", error);
      }
    },
    async addToShoppingCart(context, product) {
      const URL = "http://localhost:5000/shoppingcart";
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      };
      let response = await fetch(URL, options);
      let data = await response.json();
      context.commit("addToCart", data);
    },
    async getShoppingCart(context) {
      let URL = "http://localhost:5000/shoppingcart";
      let response = await fetch(URL, { method: "GET" });
      let data = await response.json();
      context.commit("showShoppingCart", data);
    },
    async updateShoppingCart(context, product) {
      let URL = "http://localhost:5000/shoppingcart";
      let options = {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json"
        }
      };
      let response = await fetch(URL, options);
      let data = await response.json();
      context.commit("updateCart", data);
    }
  },
  getters: {
    totalProducts(state) {
      let items = state.cart.map(item => {
        return item.quantity;
      });
      return items.reduce(function(prev, current) {
        return prev + current;
      }, 0);
    }
  },
  modules: {}
});
