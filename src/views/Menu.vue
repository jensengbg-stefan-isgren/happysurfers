<template>
  <section class="menu">
    <ShoppingCart class="shopping_cart" @click.native="toggleCart()" />
    <aside class="poly" v-if="showCart"></aside>
    <transition name="fade">
      <Cart class="cart" v-if="showCart" />
      <Navigation class="navigation" v-if="showMenu" />
    </transition>
    <MenuIcon class="menu_icon" />
    <h1 class="title">Meny</h1>
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
        <h5 class="product_title">{{ product.title }}</h5>
        <div class="dots"></div>
        <p class="product_info">{{ product.desc }}</p>
      </div>
      <p class="product_price">{{ product.price }} Kr</p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Cart from "@/components/Cart";
import MenuIcon from "@/components/MenuIcon";
import Navigation from "@/components/Navigation";
import ShoppingCart from "@/components/ShoppingCart";

export default {
  name: "Menu",
  components: {
    Cart,
    MenuIcon,
    Navigation,
    ShoppingCart
  },
  created() {
    this.getProducts();
    this.getShoppingCart();
    this.getKey();
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      showCart: state => state.shoppingCart.showCart,
      cart: state => state.shoppingCart.cart,
      showMenu: state => state.menu.showMenu,
      user: state => state.user.user
    })
  },
  methods: {
    ...mapActions([
      "getKey",
      "getUser",
      "getProducts",
      "addToShoppingCart",
      "getShoppingCart",
      "updateShoppingCart"
    ]),
    ...mapMutations(["toggleCart"]),
    addItem(product) {
      let cartItem = this.cart.find(id => id.product_id === product.product_id);
      if (!cartItem) {
        product.quantity = 1;
        this.addToShoppingCart(product);
      } else {
        cartItem.quantity += 1;
        this.updateShoppingCart(cartItem);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/transitions";
.poly {
  position: absolute;
  right: 8%;
  top: 8%;
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 26px solid white;
  border-radius: 2px;
  z-index: 10;
}
.product_info {
  font-family: $body;
  font-size: 0.75rem;
}

.shopping_cart {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 3;
}

.add_btn {
  transition: ease-out 0.2s;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $brown;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
}

.add_btn:active {
  transform: scale(1.2);
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

.dots {
  width: 12.5rem;
  border-bottom: 2px dotted rgba(0, 0, 0, 0.4);
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

.navigation {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cart {
  position: absolute;
  z-index: 2;
}
</style>
