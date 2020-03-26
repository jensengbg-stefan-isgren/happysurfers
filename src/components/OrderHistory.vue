<template>
  <section class="background" @click="closeReceipt">
    <section class="receipt">
      <img src="../assets/graphics/close.svg" alt class="close" @click="closeReceipt" />
      <div class="title">
        <h1 class="title_product">Produkt</h1>
        <h1 class="title_quantity">Antal</h1>
        <h1 class="title_price">Pris</h1>
      </div>
      <li class="list" v-for="(item, index) in theReceipt" :key="index">
        <div class="item_div">
          <p class="item_title">{{ item.title }}</p>
          <p class="item_quantity">{{ item.quantity }} x {{item.price}}kr</p>
          <p class="item_price">{{ item.price * item.quantity}}kr</p>
        </div>
      </li>
      <div class="total_cost">
        <h1>Ordersumma: {{receipt.totalValue}}kr</h1>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "OrderHistory",

  props: { receipt: Object },

  computed: {
    theReceipt() {
      return this.receipt.items;
    }
  },
  methods: {
    closeReceipt() {
      this.$emit("closeReceipt", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  width: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.726);
  height: 100%;
}

.receipt {
  background: $pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 30rem;
  color: black;
  border-radius: 6px;
  position: relative;
}

.close {
  width: 1.5rem;
  margin: 0.5rem;
  align-self: flex-end;
}
.title {
  display: flex;
  font-size: 1.2rem;
  width: 90%;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
  font-family: $header;
}

.list {
  display: flex;
  width: 100%;
}
.item_div {
  display: grid;
  grid-template-areas: "title quantity price";
  grid-template-columns: 35% 25% 20%;
  grid-template-rows: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
  font-family: $body;
}

.item_title {
  grid-area: title;
  font-size: 1rem;
}

.item_quantity {
  grid-area: quantity;
}

.item_price {
  grid-area: price;
  justify-self: flex-end;
}

.total_cost {
  position: absolute;
  font-size: 1rem;
  font-family: $header;
  bottom: 1rem;
}
</style>