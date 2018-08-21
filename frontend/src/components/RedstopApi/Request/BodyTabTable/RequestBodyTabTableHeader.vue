<template>
    <thead id="request-body-tab-table-header">
      <tr>
        <td v-for="item in tableHeaderList" :key="item.id">
          <b>{{item}}</b>
        </td>
      </tr>
    </thead>
</template>

<script>
export default {
  props: ['initTableHeaderList'],
  name: 'RequestBodyTabTableHeader',
  data: function () {
    return {
      tableHeaderList: this.initTableHeaderList
    }
  }
}
</script>

<style scoped>
  td{
    border-bottom: 2px solid #8B95AC;
    text-align: center;
    width: 33%;
  }
</style>
