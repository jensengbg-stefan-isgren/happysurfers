export default {
  state: {
    activeOrder: {},
    intervalID: ""
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
  mutations: {
    clearActiveOrder(state) {
      state.activeOrder = {};
    },
    addToHistory() {},

    getOrderHistory(state, orderedItems) {
      state.orderHistory = orderedItems;
    },

    sendOrder(state, order) {
      if (Object.keys(state.activeOrder).length === 0) {
        state.activeOrder = order;
        this.commit("countDown");
      } else {
        this.commit("clearActiveOrder");
        state.activeOrder = order;
        this.commit("countDown");
      }
    },
    countDown(state) {
      let duration = state.activeOrder.eta * 60;
      var timer = duration,
        minutes,
        seconds;

      var obj = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        state.activeOrder.eta = minutes + ":" + seconds;

        if (--timer < 0) {
          timer = 0;
          clearInterval(obj);
          this.commit("clearActiveOrder");
        }
      }, 1000);
      state.intervalID = obj;
    }
  },
  getters: {}
};
