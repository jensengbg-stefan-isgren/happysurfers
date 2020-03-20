<template>
  <section class="empty_cart">
    <img src="../assets/graphics/emoji.png" alt />
    <p>Oops du har glömt beställa kaffe</p>
    <button @click="toggleCart" class="order_button" type="button">Beställ</button>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["toggleCart"]),
    toMenu() {
      this.$router.push;
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
img {
  height: 250px;
  width: 250px;
}

p {
  margin-top: 1rem;
  font-family: $header;
  font-size: 1.3rem;
  text-align: center;
}

.order_button {
  margin: auto;
  width: 7.5rem;
  height: 2.8rem;
  justify-self: center;
  font-size: 1.5rem;
  color: white;
  background: $light-green;
  border-radius: 3.1rem;
  font-weight: 900;
  font-family: $header;
  border: none;
  outline: none;
}
</style>