<template>
    <tr id="request-body-tab-table-row">
      <td v-for="(value,key) in tableRowData" :key="key" :class="{'color-row':key%2==0}">
        <span v-if="value!=null">{{value}}</span>
        <span v-else>-</span>
      </td>
    </tr>
</template>

<script>
export default {
  props: ['initTableRowData'],
  name: 'RequestBodyTabTableRow',
  created: function () {
    var values = Object.keys(this.tableRowData).map(key => this.tableRowData[key])
    this.tableRowData = values
  },
  data: function () {
    return {
      tableRowData: this.initTableRowData
      // styleObject: {
      //   backgroundColor: '#8B95AC'
      // }
    }
  }
}
</script>

<style scoped>
  td{
    border-bottom: 1px solid #8B8B8B;
    text-align: center;
    padding: 7px;
  }
  .color-row{
    background-color: #F3F3F3;
  }
</style>
