<template>
  <div class="rs-header">
    <header>
      <rs-header-board v-if="true"></rs-header-board>
      <rs-header-project v-if="false"></rs-header-project>
    </header>
  </div>
</template>

<script>
import RsHeaderProject from './RsHeader/RsHeaderProject'
import RsHeaderBoard from './RsHeader/RsHeaderBoard'
export default {
  name: 'rs-header',
  components: {RsHeaderBoard, RsHeaderProject}
}
</script>

<style>
  header {
    position: relative;
    height: 60px;
    z-index: 2;
  }
</style>
