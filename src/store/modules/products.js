export default {
  state: {
    products: []
  },
  mutations: {
    getProducts(state, products) {
      state.products = products;
    }
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
    }
  }
};
