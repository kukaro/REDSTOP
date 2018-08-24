<template>
  <div class="rs-header">
    <header>
      <div class="logo-div">
        <img src="../assets/img/rs-full-logo.png" alt="logo">
      </div>

      <rs-headrer-body></rs-headrer-body>

      <div class="userInfoDiv">

      </div>
    </header>

  </div>
</template>

<script>
import RsHeadrerBody from './RsHeader/RsHeaderBody'
export default {
  name: 'rs-header',
  components: {RsHeadrerBody}
}
</script>

<style>
@import '../assets/css/rs-header.css';
</style>
