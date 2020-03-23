<template>
  <section class="order_history">
    <MenuIcon class="menu_icon" />
    <Navigation class="navigation" v-if="showMenu" />
    <h1 class="title">Dina ordrar</h1>
    <section class="history active_orders">Aktiva beställningar</section>
    <section class="history active_orders">Historik</section>
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
  background: url(../assets/graphics/graphics-header.svg) center top no-repeat,
    url(../assets/graphics/graphics-footer.svg) center bottom no-repeat;
  margin: auto;
  background-color: $pink;
  width: 375px;
  height: 100vh;
}

.title {
  font-family: $header;
  text-align: center;
}

.history {
  text-align: center;
  border-bottom: 1px solid darkslategrey;
  font-family: $body;
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
