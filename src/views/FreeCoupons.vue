<template>
  <div>
    <section class="coupons_section">
      <Navigation class="navigation" v-if="showMenu" />
      <h1>GRATISKUPONGER</h1>
      <MenuIcon class="menu_icon" />
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MenuIcon from "@/components/MenuIcon";
import Navigation from "@/components/Navigation";
export default {
  components: {
    MenuIcon,
    Navigation
  },
  computed: {
    ...mapState({
      showMenu: state => state.menu.showMenu
    })
  }
};
</script>

<style lang="scss" scoped>
.coupons_section {
  position: relative;
  background: url(../assets/graphics/graphics-header.svg) center top no-repeat,
    url(../assets/graphics/graphics-footer.svg) center bottom no-repeat;
  margin: auto;
  background-color: $pink;
  width: 375px;
  height: 100vh;
}
</style>
