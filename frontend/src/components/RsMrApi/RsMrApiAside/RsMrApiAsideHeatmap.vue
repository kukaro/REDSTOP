<template>
  <div class="rs-mr-api-aside-heatmap">
   <p>Response Time</p>
  </div>
</template>

<script>
export default {
  name: 'rs-mr-api-aside-heatmap',
  components: { },
  created: function () {
  },
  data: function () {
    // return {
    //   navHeaderList: ['Explorer', 'History'],
    //   clickNumber: 0
    // }
  },
  methods: {
    // mouseClick: function (key) {
    //   this.clickNumber = key
    //   // console.log(this.clickNumber)
    // }
  }
}
</script>

<style scoped>
.rs-mr-api-aside-heatmap {
  width: 100%;
  height: 30%;
  margin-bottom: 10px;
  padding-left: 10px;
}
p{
  width: 405px;
  height: 23px;
  font-family: TitilliumWeb;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
}
</style>
