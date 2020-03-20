<template>
  <section class="bg_section">
    <section class="cartCard">
      <h1>Din beställning</h1>
      <EmptyCart v-if="cart <= 0" class="empty_cart" />
      <li v-for="(item, index) in cart" :key="index" class="orders">
        <div class="coffe">
          <h3>{{ item.title }}</h3>
          <p class="dots">..................................</p>
          <br />
        </div>
        <p class="price">{{ item.price }}kr</p>
        <div class="amount">
          <img src="../assets/graphics/arrow-up.svg" alt />
          <p>{{ item.quantity }}</p>
          <img src="../assets/graphics/arrow-down.svg" alt />
        </div>
      </li>
      <div class="totals">
        <h2 class="totalText">Total</h2>
        <p class="dots">..................................</p>
        <br />
        <p class="inkl">inkl moms + drönarleverans</p>
        <h2 class="totalPrice">{{totalPrice}} kr</h2>
        <br />

        <button
          :class="cart <= 0 ? 'orderButtonEmpty' : 'orderButton'"
          @click="toStatus"
          class="orderButton"
          :disabled="cart <= 0"
        >Take my money!</button>
      </div>
    </section>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import EmptyCart from "@/components/EmptyCart";
export default {
  name: "Cart",

  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalPrice"]),
    cart() {
      return this.$store.state.cart;
    }
  },
  components: {
    EmptyCart
  },
  created() {
    this.$store.dispatch("getShoppingCart");
  },
  methods: {
    ...mapActions(["getShoppingCart"]),
    toStatus() {
      console.log("hello");
      this.$router.push("/status");
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

.coffe {
  grid-area: coffe;
  display: flex;
  font-family: $header;

  .dots {
    height: 100%;
    align-self: flex-end;
  }
}

.price {
  font-family: $body;
}

.amount {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  grid-area: amount;
  font-family: $body;

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

  .dots {
    justify-self: flex-start;
    align-self: flex-end;
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

.orderButton {
  grid-area: orderButton;
  width: 15.5rem;
  height: 3.5rem;
  justify-self: center;
  font-size: 1.5rem;
  color: white;
  background: $brown;
  border-radius: 3.1rem;
  font-weight: 900;
  font-family: $header;
  border: none;
  outline: none;
}

.orderButtonEmpty {
  background-color: $orange;
}

.empty_cart {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 400px;

  background-color: white;
}
</style>
