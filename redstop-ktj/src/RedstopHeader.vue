<template>
  <div id="redstop-header">
      {{debug}}<br>
      <li v-for="item in headerList">
        {{item}}
      </li>
  </div>
</template>

<script>
export default {
  name: 'RedstopHeader',
  created: function () {
    this.$http.get('http://localhost:3000/api/header').then((response) => {
      this.debug = 1
      this.headerList = response.data
    })
  },
  data: function () {
    return {
      debug: {},
      headerList: {}
    }
  }
}
</script>

<style>

</style>
