<template>
  <div id="app">
    <transition name="welcome">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./styles/transitions";
* {
  margin: 0;
  padding: 0;
}
</style>
