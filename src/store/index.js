import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    products: [],
    cart: [],
    orderHistory: [],
    activeOrder: {},
    showMenu: false,
    showCart: false
  },
  mutations: {
    addUser(state, user) {
      state.user = user;
    },
    getUser(state, user) {
      state.user = user;
    },
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
    },
    clearCart(state) {
      state.cart = [];
    },
    getProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    getShoppingCart(state, cartItems) {
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
        context.commit("getProducts", data);
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
        context.commit("getShoppingCart", data);
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
    // async sendOrder(context, cartItems) {
    //   let URL = "http://localhost:5000/api/beans";
    //   let options = {
    //     method: "POST",
    //     body: JSON.stringify(cartItems),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   };
    //   try {
    //     let response = await fetch(URL, options);
    //     let data = await response.json();
    //     context.commit("sendOrder", data);
    //   } catch (error) {
    //     console.log("DELETE ERROR :", error);
    //   }
    // },
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
    },
    async createUser(context, user) {
      const URL = "http://localhost:5000/user";
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      };
      try {
        let response = await fetch(URL, options);
        let data = await response.json();
        context.commit("addUser", data);
      } catch (error) {
        console.log("CANT ADD TO USER", error);
      }
    },
    async getUser(context, user) {
      const URL = "http://localhost:5000/user/";
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      };
      try {
        let response = await fetch(URL, options);
        let data = await response.json();
        return data;
      } catch (error) {
        console.log("CANT ADD TO USER", error);
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
    },
    totalPriceHistory(state) {
      let items = state.orderHistory.map(item => {
        return item.totalValue;
      });
      return items.reduce(function(prev, current) {
        return prev + current;
      }, 0);
    }
  },
  modules: {}
});
