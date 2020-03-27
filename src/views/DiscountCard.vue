<template>
  <div>
    <section class="discount_section">
      <Navigation class="navigation" v-if="showMenu" />
      <MenuIcon class="menu_icon" />
      <h1 class="title">Stämpelkort</h1>
      <p>Tre beställningar, vid nästa får du en gratis kaffe!</p>
      <Stamp />
    </section>
  </div>
</template>

<script>
import Stamp from "@/components/Stamp";
import MenuIcon from "@/components/MenuIcon";
import Navigation from "@/components/Navigation";
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.getUser();
  },
  components: {
    Stamp,
    MenuIcon,
    Navigation
  },
  methods: {
    ...mapActions(["getUser"])
  },
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
  background-color: $brown;
  width: 375px;
  height: 100vh;
}

.title {
  color: $pink;
  margin-bottom: 1.5rem;
  text-align: center;
  padding-top: 7.5rem;
  font-family: $header;
  font-size: 2.6rem;
}

p {
  text-align: center;
  font-size: 14px;
  font-family: $body;
  font-weight: bold;
  color: $pink;
}
</style>
