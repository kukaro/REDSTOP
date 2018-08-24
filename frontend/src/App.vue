<template>
  <div id="app">
    <rs-header></rs-header>
    <router-view/>
  </div>
</template>

<script>
import RsHeader from './components/RsHeader'

export default {
  name: 'App',
  components: {RsHeader}
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
