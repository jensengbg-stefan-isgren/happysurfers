<template>
  <div>
    <section class="coupons_section">
      <Navigation class="navigation" v-if="showMenu" />
      <EmptyStamps class="empty_stamps" v-if="Object.keys(user).length === 0" />
      <h1 class="title">Gratiskuponger</h1>
      <FreeCoffee class="qr_code" v-for="(item, index) in this.freeCoffee" :key="index" />
      <MenuIcon class="menu_icon" />
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import EmptyStamps from "@/components/EmptyStamps";
import MenuIcon from "@/components/MenuIcon";
import FreeCoffee from "@/components/FreeCoffee";
import Navigation from "@/components/Navigation";
export default {
  components: {
    MenuIcon,
    FreeCoffee,
    Navigation,
    EmptyStamps
  },
  created() {},
  computed: {
    ...mapState({
      showMenu: state => state.menu.showMenu,
      freeCoffee: state => state.user.freeCoffee,
      user: state => state.user.user
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.coupons_section {
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
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.navigation {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.qr_code {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
