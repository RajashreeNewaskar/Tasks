<template>
  <div id="app">
    <component v-bind:is="component"></component>
    <button
      v-if="this.component != 'Calculator'"
      v-on:click="component = 'Calculator'"
      class="btn btn-primary"
    >
      Submit
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
import Registration from "./components/Registration.vue";
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Registration: Registration,
    Calculator: Calculator
  },
  data() {
    return {
      component: "Registration"
    };
  },
  methods: {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
