<template>
  <div id="app">
    <RedstopHeader></RedstopHeader>
    <App2></App2>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import RedstopHeader from './RedstopHeader'
export default {
  name: 'App',
  components: {RedstopHeader}
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
