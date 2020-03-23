<template>
  <section>
    <button @click="showMenu">
      <img src="../assets/graphics/close.svg" alt />
    </button>
    <nav>
      <h1 @click="toMenu">Meny</h1>
      <hr />
      <h1 @click="toAbout">Vårt kaffe</h1>
      <hr />
      <h1 @click="toStatus">Orderstatus</h1>
      <hr />
      <h1 @click="toOrderHistory">Orderhistorik</h1>
    </nav>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Nav",
  methods: {
    ...mapMutations(["showMenu"]),
    toMenu() {
      this.$store.commit("showMenu");
      const path = `/menu`;
      if (this.$route.path !== path) this.$router.push("/menu");
    },
    toAbout() {
      this.$store.commit("showMenu");
      const path = `/about`;
      if (this.$route.path !== path) this.$router.push("/about");
    },
    toStatus() {
      this.$store.commit("showMenu");
      this.$router.push("/status");
    },
    toOrderHistory() {
      this.$store.commit("showMenu");
      this.$router.push("/orderHistory");
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 375px;
  height: 100vh;
  background-color: #2f2926;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  top: 10rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}
nav h1 {
  cursor: pointer;
  font-size: 2rem;
  color: white;
  line-height: 38px;
  margin: 2rem;
}
nav hr {
  width: 2.5rem;
  opacity: 0.2;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: none;
  background: white;

  img {
    width: 1.6rem;
  }
}
</style>
