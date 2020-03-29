<template>
  <div>
    <section class="discount_section">
      <Navigation class="navigation" v-if="showMenu" />
      <MenuIcon class="menu_icon" />
      <h1 class="title">Stämpelkort</h1>
      <p>Samla tre stämplar och nästa kaffe är gratis</p>
      <Stamp />
      <EmptyStamps class="empty_stamps" v-if="Object.keys(user).length === 0" />
    </section>
  </div>
</template>

<script>
import EmptyStamps from "@/components/EmptyStamps";
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
    Navigation,
    EmptyStamps
  },
  methods: {
    ...mapActions(["getUser"])
  },
  computed: {
    ...mapState({
      showMenu: state => state.menu.showMenu,
      user: state => state.user.user,
      stampCounter: state => state.user.stampCounter
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

.empty_stamps {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
