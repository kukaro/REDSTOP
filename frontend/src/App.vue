<template>
  <div id="app">
    <rs-header></rs-header>
    <TreeView></TreeView>
    <router-view/>
  </div>
</template>

<script>
import RsHeader from './components/RsHeader'
import TreeView from './components/TreeView'

export default {
  name: 'App',
  components: {RsHeader, TreeView}
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
