<template>
  <div class="rs-header-board">
    <div class="logo-div">
      <img src="../../assets/img/rs-full-logo.png" alt="logo">
    </div>
    <rs-header-board-body></rs-header-board-body>
    <rs-header-board-setting></rs-header-board-setting>
  </div>
</template>

<script>
import RsHeaderBoardBody from './RsHeaderBoard/RsHeaderBoardBody'
import RsHeaderBoardSetting from './RsHeaderBoard/RsHeaderBoardSetting'
export default {
  name: 'rs-header-board',
  components: {RsHeaderBoardSetting, RsHeaderBoardBody}
}
</script>

<style>
  @import '../../assets/css/rs-header.css';
</style>
