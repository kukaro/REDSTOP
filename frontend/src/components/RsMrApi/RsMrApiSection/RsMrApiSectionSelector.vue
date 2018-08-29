<template>
  <div class="rs-mr-api-section-selector">
    <div class="card">
      <ul>
        <li style="width: 50%;float: left;height: 30px">
          <span class="standard">ISP</span>
        </li>
        <li style="width: 50%;float: right;height: 30px; text-align: right">
          <span class="more">MORE</span>
          <img src="../../../assets/img/arrow-more.png" width="8px" height="8px">
          <!--for돌면서 아이템 뿌리기-->
        </li>
      </ul>
    </div>
    <div class="card">
      <ul>
        <li style="width: 50%;float: left;height: 30px">
          <span class="standard">Paltform</span>
        </li>
        <li style="width: 50%;float: right;height: 30px; text-align: right">
          <span class="more">MORE</span>
          <img src="../../../assets/img/arrow-more.png" width="8px" height="8px">
          <!--for돌면서 아이템 뿌리기-->
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'rs-mr-api-section-selector',
  components: { },
  created: function () {
  },
  data: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
.rs-mr-api-section-selector {
  left: 0;
  width: 100%;
  height: 20%;
  padding-left: 20px;
  padding-right: 20px;
}
.card{
  /*width: 441px;*/
  /*width: 50px;*/
  height: 119px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(163, 182, 198, 0.76);
  /*margin-right: 3px;*/
  padding: 10px 10px 10px 10px;
  width: 45%;
  float: left;
  position: relative;
  margin-left: 20px;
}
.standard{
  width: 22px;
  height: 23px;
  font-family: TitilliumWeb;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
}
.more{
  width: 41px;
  height: 19px;
  font-family: TitilliumWeb;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.1px;
  text-align: right;
  color: #989898;
}

</style>
