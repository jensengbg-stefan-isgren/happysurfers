<template>
  <section class="order_history">
    <MenuIcon class="menu_icon" />
    <Navigation class="navigation" v-if="showMenu" />
    <div class="profile">
      <img class="portrait" src="../assets/graphics/sixten.png" alt />
      <h1 class="name">Sixten Kaffelövér</h1>
      <p class="email">sixten.kaffelover@airbean.se</p>
    </div>
    <section class="history">
      <h1 class="old_orders">Orderhistorik</h1>
      <div></div>
    </section>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MenuIcon from "@/components/MenuIcon";
import Navigation from "@/components/Navigation";
export default {
  created() {
    this.$store.dispatch("getOrderHistory");
  },
  components: {
    MenuIcon,
    Navigation
  },
  computed: {
    ...mapState(["products", "cart", "showMenu", "showCart"])
  },
  methods: {
    ...mapActions(["getOrderHistory"])
  }
};
</script>

<style lang="scss" scoped>
.order_history {
  position: relative;
  background: url(../assets/graphics/graphics-header.svg) center top no-repeat;
  margin: auto;
  background-color: $brown;
  width: 375px;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: white;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name {
  font-family: $header;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 900;
}

.email {
  font-family: $body;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
}
.portrait {
  border-radius: 50%;
  width: 6.3rem;
}

.history {
  align-self: flex-start;
  margin-left: 2rem;
}
.old_orders {
  font-size: 1.4rem;
  font-family: $header;
  font-weight: 900;
  line-height: 120%;
}

.navigation {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
