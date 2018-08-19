<template>
  <div id="redstopHeader">
    <ul>
      <li v-for="item in headerList" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RedstopHeader',
  created: function () {
    this.$http.get('http://localhost:3000/api/header').then((response) => {
      this.headerList = response.data
    })
  },
  data: function () {
    return {
      headerList: {}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
