<template>
  <section class="about">
    <Navigation v-if="showMenu" class="navigation" />
    <MenuIcon class="menu_icon" />
    <h1 class="title">Vårt Kaffe</h1>
    <article class="about_info">
      <span class="ingress">
        Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
        grounds dripper, crema, strong whipped, variety extra iced id lungo half
        and half mazagran. Pumpkin spice.
      </span>
      <p>
        Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
        aftertaste, con panna milk black, arabica white rich beans single shot
        extra affogato. So affogato macchiato sit extraction instant grinder
        seasonal organic, turkish single shot, single origin, and robusta strong
        to go so dripper. Viennese froth, grounds caramelization skinny aromatic
        cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
        flavour cultivar ut bar instant kopi-luwak.
      </p>
      <p>
        Roast id macchiato, single shot siphon mazagran milk fair trade est
        aroma a half and half and, so, galão iced to go, whipped as cream cup
        pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
        and half at, that, percolator macchiato trifecta and body as arabica
        dripper. In galão black java milk sit trifecta, robusta, acerbic café au
        lait instant shop latte. Seasonal bar shop filter aroma id, crema,
        affogato viennese cultivar aftertaste, seasonal, percolator cream black,
        galão flavour, milk aromatic turkish skinny crema.
      </p>
    </article>
    <article class="owner">
      <img class="portrait" src="../assets/graphics/eva-cortado.jpg" alt />
      <h5>Eva Cortado</h5>
      <p class="owner_title">VD & Grundare</p>
    </article>
  </section>
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
    ...mapState(["showMenu"])
  }
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  padding-top: 140px;
  font-family: $header;
  font-size: 2.7rem;
}

.about {
  position: relative;
  margin: auto;
  background: url(../assets/graphics/graphics-header.svg) center top no-repeat,
    url(../assets/graphics/graphics-footer.svg) center bottom no-repeat;
  width: 375px;
  height: 1061px;
  background-color: $pink;
}

div {
  height: 100%;
}

.about_info {
  padding: 2rem 2rem 0rem 2rem;
}

.ingress {
  font-size: 0.84rem;
  font-weight: 600;
  font-family: $body;
}

p {
  font-size: 0.84rem;
  font-family: $body;
  line-height: 1.5;
  margin: 1rem 0;
}

.portrait {
  border-radius: 50%;
}

h5 {
  font-family: $header;
  font-size: 1.4rem;
}

.owner_title {
  margin: 0;
}

.owner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navigation {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
