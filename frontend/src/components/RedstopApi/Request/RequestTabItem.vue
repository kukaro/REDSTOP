<template>
    <div id="request-tab-item">{{headerName}}&nbsp;&nbsp;&nbsp;</div>
</template>

<script>
export default {
  props: ['name'],
  name: 'RequestTabItem',
  data: function () {
    return {
      headerName: this.name
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/request/request-tab-item.css'
</style>
