<template>
  <section class="empty_cart">
    <img src="../assets/graphics/emoji.png" alt />
    <p>Oops du har inget konto men skapa ett vettja!</p>
    <button @click="toggleCart" class="orderButton" type="button">Skapa konto</button>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["toggleCart"])
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
  color: $body;
  margin-top: 1rem;
  font-family: $header;
  font-size: 1.3rem;
  text-align: center;
}
</style>