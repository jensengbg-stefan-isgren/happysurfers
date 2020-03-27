<template>
  <section class="stamp_section">
    <article v-for="(item,index) in stampCounter" :key="index" class="stamp">
      <img src="../assets/graphics/cup.png" alt />
    </article>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: state => state.user.user,
      stampCounter: state => state.user.stampCounter
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.stamp_section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
}

.stamp {
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 5px;
}

img {
  height: 130px;
}
</style>
