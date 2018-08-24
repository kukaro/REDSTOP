<template>
  <div class="rs-tb-aside">
    <rs-tb-aside-title :initTitleName="url"></rs-tb-aside-title>
    <rs-tb-aside-ablock-api></rs-tb-aside-ablock-api>
    <rs-tb-aside-ablock-assertion></rs-tb-aside-ablock-assertion>
    <SetRequest></SetRequest>
  </div>
</template>

<script>
import SetRequest from './RedstopApi/SetRequest'
import RsTbAsideTitle from './RsTbAside/RsTbAsideTitle'
import RsTbAsideAblockApi from './RsTbAside/RsTbAsideAblockApi'
import RsTbAsideAblockAssertion from './RsTbAside/RsTbAsideAblockAssertion'

export default {
  props: ['url'],
  name: 'rs-tb-aside',
  created: function () {
  },
  components: {
    RsTbAsideAblockAssertion, RsTbAsideAblockApi, RsTbAsideTitle, SetRequest}
}
</script>

<style scoped>
  .rs-tb-aside {
    margin-top: 60px;
    margin-left: 60px;
    margin-right: 40px;
  }
</style>
