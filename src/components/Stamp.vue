<template>
  <section class="stamp_section">
    <article class="stamp">
      <img src="../assets/graphics/logo.svg" alt />
    </article>
    <article class="stamp">
      <img src="../assets/graphics/logo.svg" alt />
    </article>
    <article class="stamp">
      <img src="../assets/graphics/logo.svg" alt />
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.stamp_section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $brown;
  width: 100%;
  height: 30vh;
}

.stamp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: whitesmoke;
  border-radius: 5px;
}

img {
  height: 70px;
}
</style>
