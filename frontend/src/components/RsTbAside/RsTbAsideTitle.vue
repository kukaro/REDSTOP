<template>
    <div class="rs-tb-aside-title">
      <div width="80%" style="float: left;">
        <img v-if="titleName[0]=='g'" class='title-icon' src="../../assets/img/group.png">
        <img v-else-if="titleName[0]=='c'" class='title-icon' src="../../assets/img/case.png">
        <img v-else class='title-icon' src="../../assets/img/api.png">
        {{titleName.slice(1)}}&nbsp;
        <img id="edit-icon" src="../../assets/img/edit.png" width="15" height="15">
      </div>
      <div width="20%" style="float: right;">
        <img id="play-icon" src="../../assets/img/play.png" width="35" height="35" @click="clickPlay">
      </div>
      <br><br>
    </div>
</template>

<script>
import casing from 'eslint-plugin-vue/lib/utils/casing'

export default {
  props: ['initTitleName'],
  name: 'rs-tb-aside-title',
  watch: {
    initTitleName: function () {
      var temp = this.initTitleName.split('-')
      this.titleName = temp[temp.length - 1]
      this.curUrl = this.baseUrl + casing.getConverter('kebab-case')(this.titleName.slice(1))
      // console.log('여기는 rs-tb-aside-title')
      // this.tableValue = this.globalTableValue
      // console.log(this.tableValue)
    }
  },
  created: function () {
    var temp = this.initTitleName.split('-')
    this.titleName = temp[temp.length - 1]
    this.curUrl = this.baseUrl + casing.getConverter('kebab-case')(this.titleName.slice(1))
    // console.log(this.curUrl)
    // console.log('여기는 rs-tb-aside-title')
    this.tableValue = this.globalTableValue
    console.log(this.tableValue)
  },
  data: function () {
    return {
      titleName: this.initTitleName,
      curMethod: 'POST',
      baseUrl: 'http://localhost:4000/',
      curUrl: this.baseUrl,
      tableValue: this.globalTableValue
    }
  },
  methods: {
    clickPlay: function () {
      // console.log('여기는 rs-tb-aside-title입니다')
      // console.log(this.curMethod)
      // console.log(this.tableValue)
      var param = {
        url: this.curUrl,
        method: this.curMethod,
        data: this.tableValue
      }
      this.$http.post('http://localhost:5000/load', {params: param}).then((response) => {
        this.$emit('apiTestResultEvent', response.data)
      })
    }
  }
}
</script>

<style scoped>
.title-icon{
  padding-right: 10px;
}
</style>
