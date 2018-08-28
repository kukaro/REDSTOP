<template>
  <div class="rs-mr">
    <rs-header-project></rs-header-project>
    <!--<rs-mr-board></rs-mr-board>-->
    <rs-mr-monitoring></rs-mr-monitoring>
  </div>
</template>

<script>
import RsHeaderProject from './RsHeader/RsHeaderProject'
import RsMrBoard from './RsMrBoard'
import RsMrMonitoring from './RsMr/RsMrMonitoring'
export default {
  name: 'rs-mr',
  components: {RsMrMonitoring, RsMrBoard, RsHeaderProject}
}
</script>

<style scoped>
</style>
