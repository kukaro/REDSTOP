<template>
  <div class="rs-header-board">
    <div class="logo-div">
      <img src="../../assets/img/rs-full-logo.png" alt="logo">
    </div>
    <rs-header-board-body></rs-header-board-body>
  </div>
</template>

<script>
import RsHeaderBoardBody from './RsHeaderBoard/RsHeaderBoardBody'
export default {
  name: 'rs-header-board',
  components: {RsHeaderBoardBody}
}
</script>

<style>
  @import '../../assets/css/rs-header.css';
</style>
