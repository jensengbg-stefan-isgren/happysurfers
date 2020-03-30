<template>
  <section class="empty_cart">
    <img src="../assets/graphics/emoji.png" alt />
    <p>Oops du har inget konto men skapa ett vettja!</p>
    <button @click="$router.push('/profile')" class="orderButton" type="button">Skapa konto</button>
  </section>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
img {
  height: 250px;
  width: 250px;
}

p {
  color: $pink;
  margin-top: 1rem;
  font-family: $header;
  font-size: 1.3rem;
  text-align: center;
}

.orderButton {
  margin-top: 1rem;
  background-color: $light-green;
}
</style>