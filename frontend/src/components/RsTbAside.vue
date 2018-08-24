<template>
  <div class="rs-tb-aside">
    <rs-tb-aside-title :initTitleName="url"></rs-tb-aside-title>
    <rs-tb-aside-ablock-api></rs-tb-aside-ablock-api>
    <rs-tb-aside-ablock-assertion></rs-tb-aside-ablock-assertion>
    <rs-tb-aside-ablock-request></rs-tb-aside-ablock-request>
    <rs-tb-aside-ablock-response></rs-tb-aside-ablock-response>
  </div>
</template>

<script>
import RsTbAsideTitle from './RsTbAside/RsTbAsideTitle'
import RsTbAsideAblockApi from './RsTbAside/RsTbAsideAblockApi'
import RsTbAsideAblockAssertion from './RsTbAside/RsTbAsideAblockAssertion'
import RsTbAsideAblockRequest from './RsTbAside/RsTbAsideAblockRequest'
import RsTbAsideAblockResponse from './RsTbAside/RsTbAsideAblockResponse'

export default {
  props: ['url'],
  name: 'rs-tb-aside',
  created: function () {
  },
  components: {
    RsTbAsideAblockResponse, RsTbAsideAblockRequest, RsTbAsideAblockAssertion, RsTbAsideAblockApi, RsTbAsideTitle}
}
</script>

<style scoped>
  .rs-tb-aside {
    margin-top: 60px;
    margin-left: 60px;
    margin-right: 40px;
  }
</style>
