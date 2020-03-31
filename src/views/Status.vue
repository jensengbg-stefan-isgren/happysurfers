<template>
  <section class="background">
    <section class="status">
      <p class="orderNr">
        Ordernummer
        <span>#{{ activeOrder.orderNumber }}</span>
      </p>
      <img src="../assets/graphics/drone.svg" alt class="drone" />
      <h1>Din beställning är påväg!</h1>
      <p class="eta">
        ETA
        <span>{{ activeOrder.eta }}</span>
      </p>
      <button @click="$router.push('/profile')">Ok, cool!</button>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "status",
  methods: {},
  computed: {
    ...mapState({
      activeOrder: state => state.order.activeOrder
    })
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

.drone {
  animation-name: jumping;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: ease;
}

@keyframes jumping {
  0% {
    left: 50px;
    transform: rotate(30deg) translateY(50px);
  }
  50% {
    left: 300px;
    transform: rotate(-30deg) translateX(50px) scale(0.5);
  }
  100% {
    left: 50px;
    transform: rotate(30deg) translateX(0px) translateY(50px);
  }
}
</style>
