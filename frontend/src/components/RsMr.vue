<template>
  <div class="rs-mr">
    <rs-header-project></rs-header-project>
    <rs-mr-board></rs-mr-board>
  </div>
</template>

<script>
import RsHeaderProject from './RsHeader/RsHeaderProject'
import RsMrBoard from './RsMrBoard'
export default {
  name: 'rs-mr',
  components: {RsMrBoard, RsHeaderProject}
}
</script>

<style scoped>
</style>
