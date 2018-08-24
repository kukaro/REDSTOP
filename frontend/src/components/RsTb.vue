<template>
  <div class="rs-tb">
    <rs-tb-nav></rs-tb-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import RsTbNav from './RsTbNav'
import RsTbAside from './RsTbAside'
export default {
  name: 'rs-tb',
  components: {RsTbAside, RsTbNav}
}
</script>

<style scoped>
</style>
