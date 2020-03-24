<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getOrderHistory");
    this.$store.dispatch("getShoppingCart");
    this.$store.dispatch("getUser");
  },
  methods: {
    ...mapActions([
      "getProducts",
      "getOrderHistory",
      "getShoppingCart",
      "getUser"
    ])
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
