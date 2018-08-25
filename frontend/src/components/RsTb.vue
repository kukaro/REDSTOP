<template>
  <div class="rs-tb">
    <rs-tb-nav></rs-tb-nav>
    <rs-tb-article></rs-tb-article>
    <router-view></router-view>
  </div>
</template>

<script>
import RsTbNav from './RsTbNav'
import RsTbAside from './RsTbAside'
import RsTbArticle from './RsTbArticle'
export default {
  name: 'rs-tb',
  components: {RsTbArticle, RsTbAside, RsTbNav}
}
</script>

<style scoped>
</style>
