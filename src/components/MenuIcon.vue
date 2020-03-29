<template>
  <div>
    <div @click="showMenu" class="outer">
      <img src="@/assets/graphics/navicon.svg" alt />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["showMenu"])
  }
};
</script>

<style lang="scss" scoped>
.outer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  background-color: white;
  border-radius: 50%;
}
</style>

