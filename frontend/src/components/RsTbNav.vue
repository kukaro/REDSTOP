<template>
  <div class="rs-tb-nav">
    <nav>
      <rs-tb-nav-header></rs-tb-nav-header>
      <rs-tb-nav-body></rs-tb-nav-body>
    </nav>
  </div>
</template>

<script>
import RsTbNavHeader from './RsTbNav/RsTbNavHeader'
import RsTbNavBody from './RsTbNav/RsTbNavBody'

export default {
  name: 'rs-tb-nav',
  components: {RsTbNavBody, RsTbNavHeader},
  mounted () {
    $('nav').css('width', screen.width * 0.2)
  }
}
$(window).resize(function () {
  $('nav').css('width', screen.width * 0.2)
})
</script>

<style>
  nav {
    position: absolute;
    top: 50px;
    left: 0;
    height: 100%;
    background-color: #ffffff;
    border-right: 1px solid #F2F7FB;
  }
</style>
