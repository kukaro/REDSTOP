<template>
    <tbody id="request-body-tab-table-body">
      <RequestBodyTabTableRow v-for="item in tableValue" :initTableRowData="item" :key="item.id"></RequestBodyTabTableRow>
    </tbody>
</template>

<script>
import RequestBodyTabTableRow from './RequestBodyTabTableRow'
export default {
  components: {RequestBodyTabTableRow},
  props: ['initTableValue'],
  name: 'RequestBodyTabTableBody',
  data: function () {
    return {
      tableValue: this.initTableValue
    }
  }
}
</script>

<style scoped>
</style>
