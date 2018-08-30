<template>
    <div class="rs-tb-aside-ablock-response-body">
      <br>
        <rs-tb-aside-ablock-response-body-item v-for="(value, key) in responseBodyData" :key="key" :initKey="key" :initValue="value"></rs-tb-aside-ablock-response-body-item>
    </div>
</template>

<script>
import RsTbAsideAblockResponseBodyItem from './RsTbAsideAblockResponseBodyItem'
export default {
  props: ['initApiTestResult'],
  name: 'rs-tb-aside-ablock-response-body',
  components: {
    RsTbAsideAblockResponseBodyItem

  },
  watch: {
    initApiTestResult: function () {
      this.apiTestResult = this.initApiTestResult
      this.responseBodyData = this.apiTestResult.data
    }
  },
  data: function () {
    return {
      responseBodyData: {'id': '98723', 'price': 750000, 'amount': 9, 'tradingPairName': 'ETH-KRW', 'side': 'buy', 'type': 'limit', 'createdAt': '2018-01-09T10:43:10.000Z'},
      apiTestResult: this.initApiTestResult
    }
  }
}
</script>

<style scoped>
.rs-tb-aside-ablock-response-body{
  padding: 20px;
  background-color: #F3F3F3;
  width: 100%;
}
</style>
