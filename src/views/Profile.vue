<template>
  <section class="order_history">
    <MenuIcon class="menu_icon" />
    <Navigation class="navigation" v-if="showMenu" />
    <Login v-if="Object.keys(user).length === 0" />
    <div class="profile">
      <img class="portrait" src="../assets/graphics/sixten.png" alt />
      <h1 class="name">{{user.name}}</h1>
      <p class="email">{{user.email}}</p>
    </div>
    <section class="history">
      <h1 class="old_orders">Orderhistorik</h1>
      <ul>
        <li class="orders" v-for="(item, index) in orderHistory" :key="index">
          <p class="order_nr">#{{ item.orderNumber }}</p>
          <p class="date">{{ item.timestamp }}</p>
          <p class="sum">total ordersumma</p>
          <p class="total_price">{{ item.totalValue }} kr</p>
        </li>
      </ul>
      <div class="total">
        <h5 class="total_spent">Totalt spenderat</h5>
        <p class="total_pr">{{ totalPriceHistory }} kr</p>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Login from "@/components/Login";
import MenuIcon from "@/components/MenuIcon";
import Navigation from "@/components/Navigation";

export default {
  created() {
    this.getOrderHistory();
    this.getUser();
  },
  components: {
    Login,
    MenuIcon,
    Navigation
  },
  computed: {
    ...mapGetters(["totalPriceHistory"]),
    ...mapState([
      "products",
      "cart",
      "showMenu",
      "showCart",
      "orderHistory",
      "user"
    ])
  },
  methods: {
    ...mapActions(["getOrderHistory", "getUser"])
  }
};
</script>

<style lang="scss" scoped>
li {
  margin-bottom: 10px;
}

.total_spent {
  font-family: $body;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.total_pr {
  font-family: $body;
  font-size: 0.9rem;
  font-weight: bold;
  justify-self: end;
  color: rgba(255, 255, 255, 0.8);
}

.orders {
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.total {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 1.8rem;
  margin-right: 1.8rem;
}

.total_price,
.date {
  justify-self: end;
}

.order_nr,
.sum {
  justify-self: start;
}

.order_nr {
  cursor: pointer;
  font-family: $body;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.date {
  font-size: 0.9rem;
  font-family: $body;
  color: rgba(255, 255, 255, 0.7);
}

.sum {
  font-size: 0.75rem;
  font-family: $body;
  color: rgba(255, 255, 255, 0.5);
}

.total_price {
  font-size: 0.75rem;
  font-family: $body;
  color: rgba(255, 255, 255, 0.5);
}

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
  width: 100%;
}
.old_orders {
  margin-left: 1.8rem;
  margin-bottom: 1rem;
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

li {
  list-style: none;
}
</style>
