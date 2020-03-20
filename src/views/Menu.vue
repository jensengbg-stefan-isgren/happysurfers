<template>
  <section class="menu">
    <Navigation v-if="showMenu" />
    <MenuIcon class="menu_icon" />
    <ShoppingCart class="shopping_cart" />
    <h1 class="title">Menu</h1>
    <div
      class="product"
      v-for="(product, index) in products"
      :key="index"
      v-on:click="addItem(product, index)"
    >
      <div class="add_btn">
        <img class="add_sign" src="../assets/graphics/add.svg" alt />
      </div>
      <div>
        <h5 class="product_title">{{product.title}}.......</h5>
        <p class="product_info">{{product.desc}}</p>
      </div>
      <p class="product_price">{{product.price}} Kr</p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Navigation from "@/components/Navigation";
import MenuIcon from "@/components/MenuIcon";
import ShoppingCart from "@/components/ShoppingCart";
export default {
  components: {
    ShoppingCart,
    MenuIcon,
    Navigation
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
      //Måste hämta befintlig produkt från databasen för att kolla quantity
      // sen kan du därifrån öka värdet och skicka tillbaka till DB!

      let id = this.cart.filter(id => id.product_id === product.product_id);
      if (id.length == 0) {
        product.quantity++;
        this.$store.dispatch("addToShoppingCart", product);
      } else {
        product.quantity++;
        this.$store.dispatch("updateShoppingCart", product);
      }
    }
  },
  computed: {
    ...mapState(["products", "cart", "showMenu"])
  }
};
</script>

<style lang="scss" scoped>
.product_info {
  font-family: $body;
  font-size: 0.75rem;
}

.shopping_cart {
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.add_btn {
  margin-right: 1rem;
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
  position: relative;
  background: url(../assets/graphics/graphics-header.svg) center top no-repeat,
    url(../assets/graphics/graphics-footer.svg) center bottom no-repeat;
  margin: auto;
  background-color: $pink;
  width: 375px;
  height: 100vh;
}

.title {
  margin-bottom: 1.5rem;
  text-align: center;
  padding-top: 7.5rem;
  font-family: $header;
  font-size: 2.6rem;
}

.product_title {
  font-family: $header;
  font-size: 1.3rem;
}

.price {
  font-family: $header;
  font-size: 1.3rem;
}

.product {
  padding: 0 2rem;
  margin-bottom: 3.1rem;
  display: flex;
  flex-direction: row;
}

.product_price {
  font-family: $header;
  font-size: 1.4rem;
}

.menu_icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
