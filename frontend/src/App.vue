<template>
  <div id="app">
    <rs-header></rs-header>
    <rs-tb-nav></rs-tb-nav>
    <router-view/>
  </div>
</template>

<script>
import RsHeader from './components/RsHeader'
import RsTbNav from './components/RsTbNav'

export default {
  name: 'App',
  components: {RsTbNav, RsHeader}
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
