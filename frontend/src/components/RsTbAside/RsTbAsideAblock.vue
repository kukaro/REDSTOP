<template>
  <div class="rs-tb-aside-ablock">
    <rs-tb-aside-ablock-api></rs-tb-aside-ablock-api>
    <rs-tb-aside-ablock-assertion></rs-tb-aside-ablock-assertion>
    <rs-tb-aside-ablock-request></rs-tb-aside-ablock-request>
    <rs-tb-aside-ablock-response></rs-tb-aside-ablock-response>
  </div>
</template>
<script>
import RsTbAsideAblockApi from './RsTbAsideAblock/RsTbAsideAblockApi'
import RsTbAsideAblockAssertion from './RsTbAsideAblock/RsTbAsideAblockAssertion'
import RsTbAsideAblockRequest from './RsTbAsideAblock/RsTbAsideAblockRequest'
import RsTbAsideAblockResponse from './RsTbAsideAblock/RsTbAsideAblockResponse'

export default {
  name: 'rs-tb-aside-ablock',
  components: {RsTbAsideAblockApi, RsTbAsideAblockAssertion, RsTbAsideAblockRequest, RsTbAsideAblockResponse},
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
