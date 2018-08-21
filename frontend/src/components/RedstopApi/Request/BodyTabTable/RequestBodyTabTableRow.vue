<template>
    <tr id="request-body-tab-table-row">
      <td v-for="(value,key) in tableRowData" :key="key">
        {{value}}
      </td>
    </tr>
</template>

<script>
export default {
  props: ['initTableRowData'],
  name: 'RequestBodyTabTableRow',
  data: function () {
    return {
      tableRowData: this.initTableRowData
    }
  }
}
</script>

<style scoped>
  td{
    text-align: center;
  }
</style>
