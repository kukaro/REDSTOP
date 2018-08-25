<template>
  <div class="rs-header-project">
    <div class="logo-div">
      <img src="../../assets/img/rs-full-logo.png" alt="logo">
    </div>
    <rs-header-project-body></rs-header-project-body>
  </div>
</template>

<script>
import RsHeaderProjectBody from './RsHeaderProject/RsHeaderProjectBody'
export default {
  name: 'rs-header-project',
  components: {RsHeaderProjectBody}
}
</script>

<style>
  @import '../../assets/css/rs-header.css';
</style>
