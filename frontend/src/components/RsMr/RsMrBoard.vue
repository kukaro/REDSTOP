<template>
  <div class="rs-mr-board">
    <rs-mr-card-mini :init-width="1" :init-height="1" :init-x-pos="1" :init-y-pos="1" :init-background-color="'#ffffff'"/>
    <rs-mr-card-mini :init-width="1" :init-height="1" :init-x-pos="3" :init-y-pos="2" :init-background-color="'green'"/>
    <rs-mr-card-mini :init-width="3" :init-height="2" :init-x-pos="1" :init-y-pos="3" :init-background-color="'blue'"/>
  </div>
</template>

<script>
import RsUtilText from '../RsUtil/RsUtilText'
import RsMrCardMini from './RsMrCard/RsMrCardMiniTotalApis'
export default {
  name: 'rs-mr-board',
  components: {RsMrCardMini, RsUtilText},
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
