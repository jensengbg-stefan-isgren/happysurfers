<template>
  <section class="background">
    <section class="overlay">
      <div class="text">
        <img class="logo" src="../assets/graphics/logo.svg" alt />
        <h1>Välkommen till AirBean-familjen!</h1>
        <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
      </div>
      <div class="inputs">
        <label for="name-input" class="labels">Namn</label>
        <input v-model="userData.name" type="text" id="name-input" />
        <label for="email-input" class="labels">Epost</label>
        <input v-model="userData.email" type="text" id="email-input" />
        <div class="radio">
          <input v-model="checked" type="checkbox" id="gdpr" class="checkbox" />
          <label for="gdpr">GDPR Ok!</label>
        </div>
      </div>
      <button
        :class="!checked ? 'orderButtonEmpty' : 'orderButton'"
        :disabled="!checked"
        @click="createUser(userData)"
      >Brew me a cup!</button>
    </section>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userData: {
        name: "",
        email: ""
      },
      checked: false
    };
  },
  methods: {
    ...mapActions(["createUser"])
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: 1.9rem;
  width: 1.9rem;
}

.background {
  background: transparent;
}
.overlay {
  width: 341px;
  height: 85%;
  left: 17px;
  top: 82px;
  background: $pink;
  position: absolute;
  color: $brown;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
}
.text,
.inputs {
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    text-align: center;
    width: 20rem;
    font-family: $header;
    line-height: 120%;
    font-weight: 900;
    margin-bottom: 1rem;
  }
  p {
    width: 19rem;
    text-align: center;
    font-family: $body;
    font-size: 1rem;
  }
}
#name-input,
#email-input {
  width: 310px;
  height: 48px;
  border: 1px solid #2f2926;
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 1rem;
  background: transparent;
  outline: none;
}
#name-input[type="text"],
#email-input[type="text"] {
  font-size: 1rem;
  font-family: $body;
  color: $brown;
  padding-left: 1rem;
}

.labels {
  width: 310px;
  font-size: 0.8rem;
  font-family: $body;
  margin-bottom: 0.4rem;
}

.radio {
  width: 310px;
  font-family: $body;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}
.checkbox {
  height: 1.1rem;
  width: 1.1rem;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 0.5rem;
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
}
.checkbox:checked {
  background: #0e927d;
}

.orderButton,
.orderButtonEmpty {
  align-self: center;
}
</style>
