import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import products from "./modules/products";
import shoppingCart from "./modules/shoppingCart";
import menu from "./modules/menu";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeOrder: {}
  },
  mutations: {
    clearActiveOrder(state) {
      state.activeOrder = {};
    },
    addToHistory() {},

    getOrderHistory(state, orderedItems) {
      state.orderHistory = orderedItems;
    },

    sendOrder(state, order) {
      state.activeOrder = order;

      this.commit("countDown");
    },
    countDown(state) {
      let duration = state.activeOrder.eta * 60;
      var timer = duration,
        minutes,
        seconds;
      setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        state.activeOrder.eta = minutes + ":" + seconds;
        if (--timer < 0) {
          timer = duration;
        }
      }, 1000);
    }
  },
  actions: {
    async getOrderHistory(context) {
      let URL = "http://localhost:5000/orderhistory";
      try {
        let response = await fetch(URL, { method: "GET" });
        let data = await response.json();
        context.commit("getOrderHistory", data);
      } catch (error) {
        console.log("CANT GET ORDERHISTORY:", error);
      }
    },
    async sendOrder(context, order) {
      const URL = "http://localhost:5000/orderhistory";
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
      };
      try {
        let response = await fetch(URL, options);
        let data = await response.json();
        context.commit("addToHistory", data);
        context.commit("sendOrder", data);
      } catch (error) {
        console.log("CANT ADD TO HISTORY", error);
      }
    }
  },
  getters: {},
  modules: {
    user,
    products,
    shoppingCart,
    menu
  }
});


