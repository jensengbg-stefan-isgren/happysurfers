import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    orderHistory: [],
    activeOrder: {},
    showMenu: false,
    showCart: false
  },
  mutations: {
    clearActiveOrder(state) {
      state.activeOrder = {};
    },
    addToHistory(state, order) {
      console.log(state, order);
    },

    orderHistory(state, orderedItems) {
      state.orderHistory = orderedItems;
    },

    sendOrder(state, order) {
      state.activeOrder = order;
    },
    clearCart(state) {
      state.cart = [];
    },
    addProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    showShoppingCart(state, cartItems) {
      state.cart = cartItems;
    },
    showMenu(state) {
      state.showMenu = !state.showMenu;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    removeFromCart(state, product) {
      let cartItem = state.cart.find(
        id => id.product_id === product.product_id
      );
      let index = state.cart.indexOf(cartItem);
      state.cart.splice(index, 1);
    },
    updateCart() {}
  },
  actions: {
    async getProducts(context) {
      const URL = "http://localhost:5000/api/beans";
      try {
        let response = await fetch(URL, { method: "GET" });
        let data = await response.json();
        context.commit("addProducts", data);
      } catch (error) {
        console.log("ERROR: trying to fetch data", error);
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

      try {
        let response = await fetch(URL, options);
        let data = await response.json();
        context.commit("addToCart", data);
      } catch (error) {
        console.log("CANT ADD TO SHOPPINGCART", error);
      }
    },
    async getShoppingCart(context) {
      let URL = "http://localhost:5000/shoppingcart";
      try {
        let response = await fetch(URL, { method: "GET" });
        let data = await response.json();
        context.commit("showShoppingCart", data);
      } catch (error) {
        console.log("CANT GET SHOPPINGCART:", error);
      }
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
      try {
        let response = await fetch(URL, options);
        let data = await response.json();
        context.commit("updateCart", data);
      } catch (error) {
        console.log("UPDATE ERROR :", error);
      }
    },
    async removeFromShoppingCart(context, product) {
      let URL = "http://localhost:5000/shoppingcart";
      let options = {
        method: "DELETE",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json"
        }
      };
      try {
        let response = await fetch(URL, options);
        let data = await response.json();
        context.commit("removeFromCart", data);
      } catch (error) {
        console.log("DELETE ERROR :", error);
      }
    },
    async clearShoppingCart(context, cartItems) {
      let URL = "http://localhost:5000/shoppingcart/delete";
      let options = {
        method: "DELETE",
        body: JSON.stringify(cartItems),
        headers: {
          "Content-Type": "application/json"
        }
      };
      try {
        let response = await fetch(URL, options);
        let data = await response.json();
        context.commit("clearCart", data);
      } catch (error) {
        console.log("DELETE ERROR :", error);
      }
    },
    async sendOrder(context, cartItems) {
      let URL = "http://localhost:5000/api/beans";
      let options = {
        method: "POST",
        body: JSON.stringify(cartItems),
        headers: {
          "Content-Type": "application/json"
        }
      };
      try {
        let response = await fetch(URL, options);
        let data = await response.json();
        context.commit("sendOrder", data);
      } catch (error) {
        console.log("DELETE ERROR :", error);
      }
    },
    async getOrderHistory(context) {
      let URL = "http://localhost:5000/orderhistory";
      try {
        let response = await fetch(URL, { method: "GET" });
        let data = await response.json();
        context.commit("orderHistory", data);
      } catch (error) {
        console.log("CANT GET ORDERHISTORY:", error);
      }
    },
    async saveOrder(context, order) {
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
      } catch (error) {
        console.log("CANT ADD TO HISTORY", error);
      }
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
    },
    totalPrice(state) {
      let items = state.cart.map(item => {
        return item.quantity * item.price;
      });
      return items.reduce(function(prev, current) {
        return prev + current;
      }, 0);
    }
  },
  modules: {}
});
