<template>
  <div class="rs-tb-aside">
    <aside>
      <rs-tb-aside-title :initTitleName="url"></rs-tb-aside-title>
      <rs-tb-aside-ablock-api></rs-tb-aside-ablock-api>
      <rs-tb-aside-ablock-assertion></rs-tb-aside-ablock-assertion>
      <rs-tb-aside-ablock-request></rs-tb-aside-ablock-request>
      <rs-tb-aside-ablock-response></rs-tb-aside-ablock-response>
    </aside>
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
    RsTbAsideAblockResponse, RsTbAsideAblockRequest, RsTbAsideAblockAssertion, RsTbAsideAblockApi, RsTbAsideTitle
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  aside {
    background-color: white;
    position: absolute;
    padding-top: 60px;
    margin-left: 60%;
    padding-left: 30px;
    padding-right: 30px;
    width: 40%;
    height: 100%;
    margin-right: 40px;
    float: right;
    z-index: 1;
  }
</style>
