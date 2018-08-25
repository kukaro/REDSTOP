<template>
  <div class="rs-board-body-item">
    <span class="item-title">{{title}}</span><br>
    <span class="item-test-case">{{cntTest}} Test Cases</span><br><br>
    <div class="item-div-table">
      <table class="item-table">
        <tr>
          <td class="table-top-left" align="center">1</td>
          <td class="table-top-right" align="center">2</td>
        </tr>
        <tr>
          <td class="table-bottom" colspan="2" align="center">3</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['initTitle'],
  name: 'rs-board-body-item',
  data: function () {
    return {
      title: this.initTitle['title'],
      cntTest: this.initTitle['cntTest']
    }
  }
}
</script>

<style scoped>
.rs-board-body-item {
  padding: 20px;
  margin: 10px;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(163, 182, 198, 0.76);
}
.item-title {
  font-size: 18px;
}
.item-test-case {
  font-size: 12px;
  color: rgba(50, 60, 71, 0.5);
}
.item-div-table {
  /*background-color: black;*/
  width: 100%;
  height: 70%;
  border: 2px solid #DFEEF5;
  border-radius: 10px;
}
.item-table {
  width: 100%;
  height: 100%;
}
.table-top-left{
  border-bottom: 2px solid #DFEEF5;
  border-right: 2px solid #DFEEF5;
}
</style>
