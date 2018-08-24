<template>
    <div class="rs-tb-aside-title">
      <div width="80%" style="float: left;">
        <img v-if="titleName[0]=='g'" class='title-icon' src="../../assets/img/group.png">
        <img v-else-if="titleName[1]=='c'" class='title-icon' src="../../assets/img/case.png">
        <img v-else class='title-icon' src="../../assets/img/api.png">
        {{titleName}}&nbsp;
        <img id="edit-icon" src="../../assets/img/edit.png" width="15" height="15">
      </div>
      <div width="20%" style="float: right;">
        <img id="play-icon" src="../../assets/img/play.png" width="35" height="35">
      </div>
      <br><br>
    </div>
</template>

<script>
export default {
  props: ['initTitleName'],
  name: 'rs-tb-aside-title',
  data: function () {
    return {
      titleName: this.initTitleName
    }
  }
}
</script>

<style scoped>
.title-icon{
  padding-right: 10px;
}
</style>
