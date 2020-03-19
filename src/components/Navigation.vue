<template>
  <section>
    <button>
      <img src="../assets/graphics/close.svg" alt />
    </button>
    <nav>
      <h1 @click="toMenu">Meny</h1>
      <hr />
      <h1 @click="toAbout">Vårt kaffe</h1>
      <hr />
      <h1 @click="toStatus">Orderstatus</h1>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    toMenu() {
      this.$router.push("/menu");
    },
    toAbout() {
      this.$router.push("/about");
    },
    toStatus() {
      this.$$router.pus("/status");
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: #2f2926;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}
nav h1 {
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
  position: absolute;
  left: 2rem;
  top: 2rem;
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
