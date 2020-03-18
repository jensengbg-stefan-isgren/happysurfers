<template>
  <div>
    <h1>MENU</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    ...mapActions(["getProducts"])
  }
};
</script>

<style lang="scss" scoped>
</style>