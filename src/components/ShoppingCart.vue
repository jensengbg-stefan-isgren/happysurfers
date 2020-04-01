<template>
  <div>
    <div class="outer">
      <img src="../assets/graphics/bag.svg" alt />
      <div class="inner">
        <p>{{ totalProducts }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalProducts"])
  }
};
</script>

<style lang="scss" scoped>
.outer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: $brown;
  height: 3.75rem;
  width: 3.75rem;
}

.inner {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 70%;
  border-radius: 50%;
  height: 1.4rem;
  width: 1.4rem;
  background-color: $orange;
}
</style>
