<template>
    <div class="rs-tb-aside-ablock-request-body-tab-table">
      <table>
          <rs-tb-aside-ablock-request-body-tab-table-header :initTableHeaderList="Object.keys(tableValue[0])"></rs-tb-aside-ablock-request-body-tab-table-header>
          <rs-tb-aside-ablock-request-body-tab-table-body :initTableValue="tableValue"></rs-tb-aside-ablock-request-body-tab-table-body>
      </table>
    </div>
</template>

<script>
import RsTbAsideAblockRequestBodyTabTableHeader
  from './RsTbAsideAblockRequestBodyTabTable/RsTbAsideAblockRequestBodyTabTableHeader'
import RsTbAsideAblockRequestBodyTabTableBody
  from './RsTbAsideAblockRequestBodyTabTable/RsTbAsideAblockRequestBodyTabTableBody'
export default {
  name: 'rs-tb-aside-ablock-request-body-tab-table',
  components: {
    RsTbAsideAblockRequestBodyTabTableBody, RsTbAsideAblockRequestBodyTabTableHeader},
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
