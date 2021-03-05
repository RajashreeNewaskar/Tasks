<template>
  <div id="app">
  

    <VeeFormValidation />
  </div>
</template>

<script>

import VeeFormValidation from './components/VeeFormValidation.vue'

export default {
  name: 'App',
  components: {
 
    VeeFormValidation
  }
}
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
