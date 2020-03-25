export default {
  state: {
    user: {}
  },
  mutations: {
    addUser(state, user) {
      state.user = user;
    },
    getUser(state, user) {
      state.user = user;
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
        console.log(data);
        return data;
      } catch (error) {
        console.log("CANT ADD TO USER", error);
      }
    }
  }
};
