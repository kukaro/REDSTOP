<template>
    <div id="request-body-tab-table">
      <table>
          <RequestBodyTabTableHeader :initTableHeaderList="Object.keys(tableValue[0])"></RequestBodyTabTableHeader>
          <RequestBodyTabTableBody :initTableValue="tableValue"></RequestBodyTabTableBody>
      </table>
    </div>
</template>

<script>
import RequestBodyTabTableHeader from './BodyTabTable/RequestBodyTabTableHeader'
import RequestBodyTabTableBody from './BodyTabTable/RequestBodyTabTableBody'
export default {
  name: 'RequestBodyTabTable',
  components: {RequestBodyTabTableBody, RequestBodyTabTableHeader},
  data: function () {
    return {
      tableValue: [
        {
          'Key': 'type',
          'Value': 'init',
          'Description': null
        },
        {
          'Key': 'side',
          'Value': 'buy',
          'Description': null
        },
        {
          'Key': 'price',
          'Value': '750000',
          'Description': null
        },
        {
          'Key': 'amount',
          'Value': '9',
          'Description': null
        },
        {
          'Key': 'tradingPairName',
          'Value': 'ETH-KRW',
          'Description': null
        }
      ]
    }
  }
}
</script>

<style scoped>
table{
  width: 100%;
}
</style>
