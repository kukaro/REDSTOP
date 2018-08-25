<template>
  <div class="rs-board">
    <span class="board-title">Projects</span><br><br>
    <div class="board-body"></div>
    <div style="background-color: black;width: 100px;height: 100px"></div>
  </div>
</template>

<script>
export default {
  name: 'rs-board'
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
.board-body {
  width: 100%;
  height: 100%;
}
</style>
