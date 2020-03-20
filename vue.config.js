module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`,
        prependData: `@import "@/styles/_mixins.css";`
      }
    }
  }
};
