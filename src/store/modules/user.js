export default {
  state: {
    user: {},
    genericAccount: {},
    orderHistory: [],
    stampCounter: Number,
    freeCoffee: Number
  },
  mutations: {
    addUser(state, user) {
      state.user = user;
    },
    getUser(state, user) {
      state.user = user;
      state.stampCounter = user.stampCounter;
      state.freeCoffee = user.freeCoffee;
    },
    genericAccount(state, order) {
      state.genericAccount = order;
    },
    addUserOrderHistory(state, data) {
      state.orderHistory = data;
    }
  },
  actions: {
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
        context.commit("getUser", data);
      } catch (error) {
        console.log("CANT ADD TO USER", error);
      }
    },
    async getKey(context, user) {
      const URL = "http://localhost:5000/api/beans/key";
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
        context.commit("genericAccount", data);
      } catch (error) {
        console.log("CANT ADD TO USER", error);
      }
    },
    async getUserOrderHistory({ commit }, user) {
      const URL = `http://localhost:5000/user/${user}`;
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      };
      try {
        let response = await fetch(URL, options);
        let data = await response.json();
        commit("addUserOrderHistory", data);
      } catch (error) {
        console.log("CANT ADD TO USER", error);
      }
    },
    async addStamps(context, user) {
      const URL = `http://localhost:5000/user/${user}`;
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      };
      try {
        let response = await fetch(URL, options);
        let data = await response.json();
        console.log(context);
        return data;
      } catch (error) {
        console.log("CANT ADD TO USER", error);
      }
    }
  },
  getters: {
    totalPriceHistory(state) {
      let items = state.orderHistory.map(item => {
        return item.totalValue;
      });
      return items.reduce(function(prev, current) {
        return prev + current;
      }, 0);
    }
  }
};
