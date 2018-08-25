<template>
  <div class="rs-board">
    <span class="board-title">Projects</span><img class="btn-project-create" src="../assets/img/btn-project-create.png">
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
  overflow: scroll;

}
.board-title {
  font-size: 30px;
}
.btn-project-create {
  float: right;
  width: 40px;
  height: 40px;
}
</style>
