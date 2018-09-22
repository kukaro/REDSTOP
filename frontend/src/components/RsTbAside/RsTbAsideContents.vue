<template>
  <div class="rs-tb-aside-contents">
    <div v-if="titleName[0]=='g'">
      <rs-tb-aside-gblock></rs-tb-aside-gblock>
    </div>
    <div v-else-if="titleName[0]=='c'">
      <rs-tb-aside-cblock></rs-tb-aside-cblock>
    </div>
    <div v-else-if="titleName[0]=='a'">
      <rs-tb-aside-ablock :init-title-name="titleName" :init-api-test-result="apiTestResult"></rs-tb-aside-ablock>
    </div>

  </div>
</template>
<script>
import RsTbAsideAblock from './RsTbAsideAblock'
import RsTbAsideCblock from './RsTbAsideCblock'
import RsTbAsideGblock from './RsTbAsideGblock'

export default {
  props: ['initTitleName', 'initApiTestResult'],
  name: 'rs-tb-aside-contents',
  components: {RsTbAsideAblock, RsTbAsideCblock, RsTbAsideGblock},
  watch: {
    initTitleName: function () {
      var temp = this.initTitleName.split('-')
      this.titleName = temp[temp.length - 1]
    },
    initApiTestResult: function () {
      this.apiTestResult = this.initApiTestResult
    }
  },
  data: function () {
    return {
      titleName: this.initTitleName,
      apiTestResult: this.initApiTestResult
    }
  }
}
</script>

<style scoped>
</style>
