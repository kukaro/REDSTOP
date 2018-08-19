<template>
  <div id="app">
    {{hi}}
    <RedstopHeader></RedstopHeader>
    <App2></App2>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import RedstopHeader from './RedstopHeader'
import App2 from './App2'

export default {
  name: 'App',
  data: () => {
    return {
      hi: 'melong'
    }
  },
  components: {App2, RedstopHeader}
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
