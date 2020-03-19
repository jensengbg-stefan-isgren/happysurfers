<template>
  <section class="menu">
    <h1>TJO</h1>
    <div v-for="(product, index) in products" :key="index" v-on:click="addItem(product, index)">
      <button>köp</button>
      <p>{{ product.title }}</p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getShoppingCart");
  },
  methods: {
    ...mapActions(["getProducts", "addToShoppingCart"]),
    addItem(product) {
      product.quantity++;
      this.$store.dispatch("addToShoppingCart", product);
    }
  },
  computed: {
    ...mapState(["products"])
  }
};
</script>


<style lang="scss" scoped></style>

<style lang="scss" scoped>
</style>

