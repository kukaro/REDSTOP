<template>
  <div class="rs-tb-aside-ablock">
    <rs-tb-aside-ablock-api :init-title-name="titleName"></rs-tb-aside-ablock-api>
    <rs-tb-aside-ablock-assertion></rs-tb-aside-ablock-assertion>
    <rs-tb-aside-ablock-request></rs-tb-aside-ablock-request>
    <rs-tb-aside-ablock-response :init-api-test-result="apiTestResult"></rs-tb-aside-ablock-response>
  </div>
</template>
<script>
import RsTbAsideAblockApi from './RsTbAsideAblock/RsTbAsideAblockApi'
import RsTbAsideAblockAssertion from './RsTbAsideAblock/RsTbAsideAblockAssertion'
import RsTbAsideAblockRequest from './RsTbAsideAblock/RsTbAsideAblockRequest'
import RsTbAsideAblockResponse from './RsTbAsideAblock/RsTbAsideAblockResponse'

export default {
  props: ['initTitleName', 'initApiTestResult'],
  name: 'rs-tb-aside-ablock',
  watch: {
    initTitleName: function () {
      this.titleName = this.initTitleName.slice(1)
    },
    initApiTestResult: function () {
      this.apiTestResult = this.initApiTestResult
    }
  },
  components: {RsTbAsideAblockApi, RsTbAsideAblockAssertion, RsTbAsideAblockRequest, RsTbAsideAblockResponse},
  data: function () {
    return {
      titleName: this.initTitleName.slice(1),
      apiTestResult: this.initApiTestResult
    }
  }
}
</script>

<style scoped>
</style>
