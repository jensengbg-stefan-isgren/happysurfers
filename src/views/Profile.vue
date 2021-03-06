<template>
  <section class="order_history">
    <MenuIcon class="menu_icon" />
    <transition name="fade">
      <Navigation class="navigation" v-if="showMenu" />
    </transition>
    <Login v-if="Object.keys(user).length === 0" />
    <div class="profile">
      <img class="portrait" src="../assets/graphics/sixten.png" alt />
      <h1 class="name">{{ user.name }}</h1>
      <p class="email">{{ user.email }}</p>
    </div>
    <OrderHistory v-if="showReceipt" :receipt="receipt" @closeReceipt="closeReceipt" />
    <h1 class="old_orders">Orderhistorik</h1>
    <section class="history">
      <ul class="history_scroll">
        <li
          class="orders"
          v-for="(item, index) in orderHistory"
          :key="index"
          @click="openReceipt(item)"
        >
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
import OrderHistory from "@/components/OrderHistory";

export default {
  data() {
    return {
      showReceipt: false,
      receipt: {}
    };
  },
  components: {
    Login,
    MenuIcon,
    Navigation,
    OrderHistory
  },

  created() {
    let promise = new Promise(resolve => {
      resolve(this.getUser());
    });
    promise.then(() => {
      this.getUserOrderHistory(this.user.uuid);
    });
  },
  computed: {
    ...mapGetters(["totalPriceHistory"]),
    ...mapState({
      showMenu: state => state.menu.showMenu,
      user: state => state.user.user,
      orderHistory: state => state.user.orderHistory
    })
  },
  methods: {
    ...mapActions(["getUser", "getUserOrderHistory"]),
    openReceipt(item) {
      this.receipt = item;
      this.showReceipt = true;
    },
    closeReceipt() {
      this.showReceipt = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/transitions";
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
li:last-child {
  border-bottom: 0;
}

.total {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  padding-top: 0.5rem;
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
  margin-top: 6rem;
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

.history_scroll {
  width: 100%;
  height: 25rem;
  overflow: auto;
  overflow-x: hidden;
}

.history_scroll::-webkit-scrollbar {
  background: #3a322e;
  border-radius: 6px;
}
.history_scroll::-webkit-scrollbar-thumb {
  background: #534a46;
  border-radius: 6px;
}

.old_orders {
  font-size: 1.4rem;
  font-family: $header;
  font-weight: 900;
  line-height: 120%;
  text-align: left;
  width: 85%;
  padding-top: 3rem;
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
