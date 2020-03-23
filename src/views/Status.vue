<template>
  <section class="background">
    <section class="status">
      <p class="orderNr">
        Ordernummer
        <span>{{activeOrder.orderNr}}</span>
      </p>
      <img src="../assets/graphics/drone.svg" alt />
      <h1>Din beställning är påväg!</h1>
      <p class="eta">
        ETA
        <span>{{activeOrder.eta}}</span>
      </p>
      <button @click="toOrderHistory">Ok, cool!</button>
    </section>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "status",
  methods: {
    ...mapMutations(["clearActiveOrder"]),
    toOrderHistory() {
      this.$router.push("/profile");
      this.$store.commit("clearActiveOrder");
    }
  },
  computed: {
    ...mapState(["activeOrder"])
  }
};
</script>

<style lang="scss" scoped>
.background {
  width: 375px;
  margin: auto;
  background: $orange;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.status {
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-family: $body;

  .orderNr {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);

    span {
      font-weight: 900;
    }
  }
  h1 {
    font-size: 2.1rem;
    color: white;
    font-family: $header;
  }

  button {
    width: 11.5rem;
    height: 3.5rem;
    border-radius: 50px;
    color: black;
    background-color: white;
    outline: none;
    border: none;
    font-family: $header;
    font-size: 1.5rem;
  }
}
.eta {
  font-size: 1.4rem;
  color: #ffffff;
  font-family: $body;

  span {
    font-weight: 900;
  }
}
</style>
