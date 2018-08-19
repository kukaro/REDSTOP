<template>
  <div id="app">
    <RedstopHeader></RedstopHeader>
    <router-view/>
  </div>
</template>

<script>
import RedstopHeader from './components/RedstopHeader'
export default {
  name: 'App',
  components: {RedstopHeader}
}
</script>
 
<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
