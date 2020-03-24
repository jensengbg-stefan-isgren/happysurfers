<template>
  <section class="bg_section">
    <section class="cartCard">
      <LoadingSpinner v-if="loading" class="spinner" />
      <h1 class="primary">Din beställning</h1>
      <button @click="clearCart(cart)" v-if="cart != 0" class="remove_cart_btn">Töm varukorgen</button>
      <EmptyCart v-if="cart <= 0" class="empty_cart" />
      <li v-for="(item, index) in cart" :key="index" class="orders">
        <div class="coffe">
          <h3>{{ item.title }}</h3>
          <p class="dots"></p>
          <br />
        </div>
        <p class="price">{{ item.price * item.quantity }}kr</p>
        <div class="amount">
          <img @click="addQuantity(item)" class="arrow" src="../assets/graphics/arrow-up.svg" alt />
          <p>{{ item.quantity }}</p>
          <img
            @click="removeQuantity(item)"
            class="arrow"
            src="../assets/graphics/arrow-down.svg"
            alt
          />
        </div>
      </li>
      <div class="totals">
        <h2 class="totalText">Total</h2>
        <p class="dotted"></p>
        <br />
        <p class="inkl">inkl moms + drönarleverans</p>
        <h2 class="totalPrice">{{ totalPrice }} kr</h2>
        <br />
        <button
          :class="cart <= 0 ? 'orderButtonEmpty' : 'orderButton'"
          @click="toStatus(cart)"
          class="orderButton"
          :disabled="cart <= 0"
        >Take my money!</button>
      </div>
    </section>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import LoadingSpinner from "@/components/LoadingSpinner";
import EmptyCart from "@/components/EmptyCart";
export default {
  name: "Cart",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState(["cart", "showCart"]),
    ...mapGetters(["totalPrice", "itemPrice"]),
    cart() {
      return this.$store.state.cart;
    }
  },
  components: {
    EmptyCart,
    LoadingSpinner
  },
  created() {
    this.$store.dispatch("getShoppingCart");
  },
  methods: {
    ...mapMutations(["countDown"]),
    ...mapActions([
      "getShoppingCart",
      "updateShoppingCart",
      "removeFromShoppingCart",
      "clearShoppingCart",
      "saveOrder"
    ]),
    toStatus(cart) {
      let promise = new Promise(resolve => {
        let orderButton = document.querySelector(".orderButton");
        orderButton.innerHTML = "Skickar beställning";
        this.loading = true;
        resolve(this.$store.dispatch("saveOrder", cart));
      });

      promise.then(() => {
        this.loading = false;
        this.$store.commit("countDown");
        this.$store.commit("clearCart");
        this.$store.commit("toggleCart");
        this.$router.push("/status");
      });
    },
    addQuantity(item) {
      let cartItem = this.cart.find(id => id.product_id === item.product_id);
      cartItem.quantity++;
      this.$store.dispatch("updateShoppingCart", cartItem);
    },
    removeQuantity(item) {
      let cartItem = this.cart.find(id => id.product_id === item.product_id);
      if (cartItem.quantity == 1) {
        this.$store.dispatch("removeFromShoppingCart", cartItem);
      } else {
        cartItem.quantity--;
        this.$store.dispatch("updateShoppingCart", cartItem);
      }
    },
    clearCart(cart) {
      this.$store.dispatch("clearShoppingCart", cart);
    }
  }
};
</script>

<style lang="scss" scoped>
.shopping_cart {
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.saving {
  font-size: 40px;
}

.saving span {
  font-size: 50px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.saving span:nth-child(2) {
  animation-delay: 0.2s;
}

.saving span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

.bg_section {
  width: 375px;
  margin: auto;
  position: relative;
}

section {
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: auto;
  background: rgba(0, 0, 0, 0.8);

  height: 100vh;
  max-height: 100vh;
}

.cartCard {
  width: 90%;
  background-color: white;
  height: 86%;
  margin-bottom: 2rem;

  h1 {
    text-align: center;
    font-family: $header;
    font-size: 2rem;
    margin: 2rem 0 1rem;
  }
}
.orders {
  display: grid;
  grid-template-areas: "coffe amount";
  grid-template-columns: 90% 10%;
  grid-row: 2.5rem;
  margin: 0.5rem 1rem;
  align-items: center;
}
h3 {
  width: 15rem;
  margin-right: -10rem;
}

.coffe {
  grid-area: coffe;
  display: flex;
  font-family: $header;
}
.dots {
  height: 100%;
  align-self: flex-end;
  border-bottom: 2px dotted rgba(0, 0, 0, 0.4);
  width: 26rem;
}

.price {
  transform: translateY(-10px);
  font-family: $body;
}

.amount {
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  grid-area: amount;
  font-family: $body;
  transform: translateY(5px);
  font-weight: 600;

  img {
    color: black;
  }
}

.totals {
  background: white;
  display: grid;
  grid-template-areas:
    "totalText dot totalPrice"
    "inkl inkl ."
    "orderButton orderButton orderButton";
  grid-template-columns: 20% 55% 25%;
  grid-template-rows: 2rem 2rem;
  position: absolute;
  bottom: 4rem;
  width: 90%;
  font-family: $header;

  .dotted {
    justify-self: flex-start;
    align-self: flex-end;
    border-bottom: 2px dotted rgba(0, 0, 0, 0.4);
    width: 11.5rem;
  }
}

.totalText {
  grid-area: totalText;
  justify-content: flex-end;
  margin-left: 0.5rem;
}

.totalPrice {
  grid-area: totalPrice;
  margin-right: 0.5rem;
}

.inkl {
  grid-area: inkl;
  font-family: $body;
  margin-left: 0.5rem;
}

.empty_cart {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  background-color: white;
}

.spinner {
  z-index: 100;
}
</style>
