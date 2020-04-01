<template>
  <section class="bg_section">
    <section class="cartCard">
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
          @click="toStatus()"
          class="orderButton"
          :disabled="cart <= 0"
        >Take my money!</button>
        <LoadingSpinner v-if="loading" class="spinner" />
      </div>
    </section>
  </section>
</template>

<script>
import EmptyCart from "@/components/EmptyCart";
import LoadingSpinner from "@/components/LoadingSpinner";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      loading: false
    };
  },
  created() {
    this.checkUserExist();
  },
  mounted() {},
  computed: {
    ...mapState({
      cart: state => state.shoppingCart.cart,
      user: state => state.user.user,
      order: state => state.shoppingCart.order,
      genericAccount: state => state.user.genericAccount
    }),
    ...mapGetters(["totalPrice"])
  },
  components: {
    EmptyCart,
    LoadingSpinner
  },
  methods: {
    ...mapMutations(["countDown", "clearCart", "toggleCart", "orderInfo"]),
    ...mapActions([
      "getKey",
      "getUser",
      "sendOrder",
      "saveOrder",
      "getShoppingCart",
      "clearShoppingCart",
      "updateShoppingCart",
      "removeFromShoppingCart",
      "addStamps"
    ]),
    toStatus() {
      clearInterval(this.$store.state.order.intervalID);
      let promise = new Promise(resolve => {
        let orderButton = document.querySelector(".orderButton");
        this.loading = true;
        orderButton.classList.add("orderText");
        orderButton.innerHTML = "Skickar beställning";
        resolve(this.sendOrder(this.order));
      });

      promise.then(() => {
        if (Object.keys(this.user).length === 0) {
          console.log("finns ingen användare skapad");
        } else {
          this.addStamps(this.user.uuid);
        }
        this.loading = false;
        this.clearCart();
        this.toggleCart();
        this.$router.push("/status");
      });
    },
    addQuantity(item) {
      let cartItem = this.cart.find(id => id.product_id === item.product_id);
      cartItem.quantity++;
      this.updateShoppingCart(cartItem);
    },
    removeQuantity(item) {
      let cartItem = this.cart.find(id => id.product_id === item.product_id);
      if (cartItem.quantity == 1) {
        this.removeFromShoppingCart(cartItem);
      } else {
        cartItem.quantity--;
        this.updateShoppingCart(cartItem);
      }
    },
    clearCart(cart) {
      this.clearShoppingCart(cart);
    },
    checkUserExist() {
      if (Object.keys(this.user).length === 0) {
        this.orderInfo({ items: this.cart, uuid: this.genericAccount.uuid });
      } else {
        this.orderInfo({ items: this.cart, uuid: this.user.uuid });
      }
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
  position: absolute;
  right: 2rem;
  bottom: 5px;
  z-index: 100;
}

.orderText {
  font-size: 1.2rem;
  padding-left: 0.5rem;
  text-align: left;
  font-stretch: $header;
}

.arrow {
  transition: ease-out 0.2s;
}

.arrow:active {
  transform: scale(1.5);
}
</style>
