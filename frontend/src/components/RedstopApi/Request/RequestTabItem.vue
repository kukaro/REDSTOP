<template>
    <div id="request-tab-item">{{headerName}}</div>
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
#request-icon{
  padding-right: 10px;
}
</style>
