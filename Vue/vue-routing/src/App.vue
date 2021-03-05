<template>
  <div id="app">
    <HelloWorld msg=""/>
      <nav>
        <ul style="display: inline-flex;">
          <li style="margin-right: 30px;">
            <router-link to='/'>Home</router-link>
          </li>
          <li style="margin-right: 30px;">
            <router-link to='/about'>About</router-link>
          </li>
          <li style="margin-right: 30px;">
            <router-link to='/contact'>Contact</router-link>
          </li>
        </ul>
      </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
