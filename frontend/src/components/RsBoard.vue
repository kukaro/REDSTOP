<template>
  <div class="rs-board">
    <span class="board-title">Projects</span><br>
    <rs-board-body></rs-board-body>
  </div>
</template>

<script>
import RsBoardBody from './RsBoard/RsBoardBody'
export default {
  name: 'rs-board',
  components: {RsBoardBody}
}
</script>

<style scoped>
.rs-board {
  height: 100%;
  padding: 50px;
}
.board-title {
  font-size: 30px;
}
</style>
