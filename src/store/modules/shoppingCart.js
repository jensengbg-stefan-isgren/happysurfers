export default {
  state: {
    showCart: false,
    cart: []
  },
  mutations: {
     clearCart(state) {
      state.cart = [];
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    getShoppingCart(state, cartItems) {
      state.cart = cartItems;
    },
    removeFromCart(state, product) {
      let cartItem = state.cart.find(
        id => id.product_id === product.product_id
      );
      let index = state.cart.indexOf(cartItem);
      state.cart.splice(index, 1);
    },
    updateCart() {},
    toggleCart(state) {
      state.showCart = !state.showCart;
    }
  },
  actions: {
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
    }
  },
  getters: {
    totalPrice(state) {
      let items = state.cart.map(item => {
        return item.quantity * item.price;
      });
      return items.reduce(function(prev, current) {
        return prev + current;
      }, 0);
    },
    totalProducts(state) {
      let items = state.cart.map(item => {
        return item.quantity;
      });
      return items.reduce(function(prev, current) {
        return prev + current;
      }, 0);
    }
  }
};
