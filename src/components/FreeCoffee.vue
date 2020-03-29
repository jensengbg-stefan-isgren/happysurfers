<template>
  <article>
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
  </article>
</template>

<script>
import QrcodeVue from "qrcode.vue";
export default {
  data() {
    return {
      value: "http://localhost:3000",
      size: 100
    };
  },
  components: {
    QrcodeVue
  }
};
</script>

<style lang="scss" scoped></style>
