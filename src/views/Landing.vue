<template>
  <section class="landing" @click="$router.push('/menu')">
    <img src="../assets/graphics/airbean-landing.svg" alt />
  </section>
</template>

<script>
export default {
  name: "landing"
};
</script>

<style lang="scss" scoped>
.landing {
  width: 23.5rem;
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/graphics/intro-graphic-left.svg") center left
      no-repeat,
    url("../assets/graphics/intro-graphic-right.svg") center right no-repeat;
  background-color: $dark-green;
  background-size: contain;
}
</style>
