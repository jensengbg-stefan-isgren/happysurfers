<template>
  <section class="menu">
    <ShoppingCart />
    <h1 class="title">Menu</h1>
    <div
      v-for="(product, index) in products"
      :key="index"
      v-on:click="addItem(product, index)"
    >
      <div class="add_btn">
        <img class="add_sign" src="../assets/graphics/add.svg" alt="" />
      </div>
      <p class="product_title">{{ product.title }}</p>
      <p>{{ product.desc }}</p>
      <span>...............</span>
      <p class="price">{{ product.price }} Kr</p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ShoppingCart from "../components/ShoppingCart";
export default {
  components: {
    ShoppingCart
  },
  created() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getShoppingCart");
  },
  methods: {
    ...mapActions([
      "getProducts",
      "addToShoppingCart",
      "getShoppingCart",
      "updateShoppingCart"
    ]),
    addItem(product) {
      let id = this.cart.filter(id => id.product_id === product.product_id);
      if (id.length == 0) {
        product.quantity++;
        this.$store.dispatch("addToShoppingCart", product);
      } else {
        this.$store.dispatch("updateShoppingCart", product);
      }
    }
  },
  computed: {
    ...mapState(["products", "cart"])
  }
};
</script>

<style lang="scss" scoped>
.add_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $brown;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
}

img {
  width: 1.2rem;
  height: 1.2rem;
}

.menu {
  background: url(../assets/graphics/graphics-header.svg) center top no-repeat,
    url(../assets/graphics/graphics-footer.svg) center bottom no-repeat;
  margin: auto;
  background-color: $pink;
  width: 375px;
  height: 839px;
}

.title {
  font-family: $header;
  font-size: 2.6rem;
}

.product_title {
  font-family: $header;
  font-size: 1.3rem;
}

div {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
}

.price {
  font-family: $header;
  font-size: 1.3rem;
}
</style>
