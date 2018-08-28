<template>
  <div class="rs-mr-board">
    <rs-mr-card-mini-total-apis :init-x-pos="1" :init-y-pos="1" :init-api-cnt="43"/>
    <rs-mr-card-mini-total-availability :init-x-pos="2" :init-y-pos="1" :init-percent="98"/>
    <rs-mr-card-mini-avg-p95 :init-x-pos="3" :init-y-pos="1" :init-avg="2" :init-p95="4.4"/>
    <rs-mr-card-mini-check-point :init-x-pos="4" init-y-pos="1" :init-running="40" :init-false-cnt="1" :init-inactive="40" :init-total="43"/>
  </div>
</template>

<script>
import RsUtilText from '../RsUtil/RsUtilText'
import RsMrCardMiniTotalApis from './RsMrCard/RsMrCardMiniTotalApis'
import RsMrCardMiniTotalAvailability from './RsMrCard/RsMrCardMiniAvailability'
import RsMrCardMiniAvgP95 from './RsMrCard/RsMrCardMiniAvgP95'
import RsMrCardMiniCheckPoint from './RsMrCard/RsMrCardMiniCheckPoint'
export default {
  name: 'rs-mr-board',
  components: {
    RsMrCardMiniCheckPoint, RsMrCardMiniAvgP95, RsMrCardMiniTotalAvailability, RsMrCardMiniTotalApis, RsUtilText},
  data: function () {
    return {
      test: 'total apis'
    }
  }
}
</script>

<style scoped>
.rs-mr-board {
  margin-top: 10px;
}
</style>
