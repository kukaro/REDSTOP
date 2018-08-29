<template>
  <div id="test" class="rs-mr-card-mini-regional-analysis rs-mr-card" :style="{'margin': '20px', 'width': width, 'height': height+'px', 'left': left, 'top': top + 'px'}">
    <div class="inner" :style="{'background-color': backgroundColor}">
      <b><rs-util-text :init-value="'Regional Analysis'" :init-color="'#5e5e5e'" :init-size="23"/></b>
      <div class="dial">
        <rs-util-text :init-value="'Health'" :init-size="16" :init-color="'#696969'"/><br><br>
        <img class="map-bar" src="../../../assets/img/map-bar.png"/>
      </div>
      <div class="rs-map">

      </div>
    </div>
  </div>
</template>

<script>
import RsUtilText from '../../RsUtil/RsUtilText'

export default {
  props: ['initWidth', 'initHeight', 'initXPos', 'initYPos', 'initBackgroundColor', 'initApiCnt'],
  name: 'rs-mr-card-mini-regional-analysis',
  created: function () {
  },
  mounted: function () {
  },
  components: {RsUtilText},
  data: function () {
    return {
      width: 100 / 6 * (this.initWidth ? this.initWidth : 1) + '%',
      height: 130 * (this.initHeight ? this.initHeight : 1),
      left: 100 / 6 * (this.initXPos - 1) + '%',
      top: 130 * (this.initYPos - 1) + 70,
      background: 10
    }
  }
}
</script>

<style scoped>
.rs-mr-card {
  z-index: 4;
  position: absolute;
  padding: 10px;
}
.inner{
  padding: 13px;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 4px 0 #a6b7cd;
  border-radius: 8px;
}
.map-bar{
  float: left;
  height: 70%;
}
.dial{
  position: absolute;
  padding-top: 30px;
  left: 20px;
  width: 12.5%;
  height: calc(100% - 86px);
  /*background-color: red;*/
}
.rs-map{
  position: absolute;
  padding-top: 30px;
  left: calc(12.5% + 20px);
  width: calc(87.5% - 40px);
  height: calc(100% - 86px);
  background-color: green;
}
</style>
