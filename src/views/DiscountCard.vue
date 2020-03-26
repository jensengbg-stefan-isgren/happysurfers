<template>
  <div>
    <section class="discount_section">
      <Navigation class="navigation" v-if="showMenu" />
      <MenuIcon class="menu_icon" />
      <h1>Stämpelkort</h1>
      <Stamp />
    </section>
  </div>
</template>

<script>
import Stamp from "@/components/Stamp";
import MenuIcon from "@/components/MenuIcon";
import Navigation from "@/components/Navigation";
import { mapState } from "vuex";
export default {
  components: {
    MenuIcon,
    Navigation,
    Stamp
  },
  methods: {},
  computed: {
    ...mapState({
      showMenu: state => state.menu.showMenu
    })
  }
};
</script>

<style lang="scss" scoped>
.discount_section {
  position: relative;
  background: url(../assets/graphics/graphics-header.svg) center top no-repeat,
    url(../assets/graphics/graphics-footer.svg) center bottom no-repeat;
  margin: auto;
  background-color: $pink;
  width: 375px;
  height: 100vh;
}
</style>
