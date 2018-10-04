<template>
  <div id="test" class="rs-mr-card-mini-regional-analysis rs-mr-card" :style="{'margin': '20px', 'width': width, 'height': height+'px', 'left': left, 'top': top + 'px'}">
    <div class="inner" :style="{'background-color': backgroundColor}">
      <b><rs-util-text :init-value="'Regional Analysis'" :init-color="'#5e5e5e'" :init-size="23"/></b>
      <div width="20%" style="float: right;">
        <select id="region" name="region">
          <option value="1" selected="selected">South Korea</option>
          <option value="2">Japan</option>
        </select>
      </div>
      <div class="dial">
        <rs-util-text :init-value="'Health'" :init-size="16" :init-color="'#696969'"/><br><br>
        <img class="map-bar" src="../../../assets/img/map-bar.png"/>
      </div>
      <div class="rs-map">
        <img class="map-img" src="../../../assets/img/map-white.png"/>
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
      width: $(window).width() * 0.288 + 'px',
      height: 126 * (this.initHeight ? this.initHeight : 1),
      left: $(window).width() * 0.668 + 'px',
      top: 130 * (this.initYPos - 1) + 80,
      background: 10
    }
  }
}
</script>

<style scoped>
.rs-mr-card {
  z-index: 4;
  width: 29%;
  position: absolute;
}
.inner{
  padding: 26px;
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
  left: 36px;
  width: 12.5%;
  height: calc(100% - 86px);
  /*background-color: red;*/
}
.rs-map{
  position: absolute;
  left: calc(12.5% + 0px);
  width: calc(87.5% - 40px);
  height: calc(100% - 86px);
  margin-top: 84px;
  /*background-color: green;*/
}
select {
  position: absolute;
  top: 68px;
  left: 40%;
  padding-left: 16px;
  border-radius: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin-top: 24px;
  width: 200px;
  height: 32px;
  background-size: 20px;
  background: #ffffff url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg) no-repeat 90% 50%;
  border: solid 1px #c7c7c7;
  font-family: TitilliumWeb;
  font-size: 14px;
}
.map-img{
  width: 80%;
  left: 10%;
  position: absolute;
  height: 80%;
}
</style>
