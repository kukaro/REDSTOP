<template>
  <div class="rs-header">
    <header>
      <rs-header-project></rs-header-project>
    </header>
  </div>
</template>

<script>
import RsHeaderProject from './RsHeaderProject'
export default {
  name: 'rs-header',
  components: {RsHeaderProject}
}
</script>

<style>
  header {
    position: relative;
    height: 60px;
    z-index: 2;
  }
</style>
