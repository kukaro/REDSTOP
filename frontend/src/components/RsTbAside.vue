<template>
  <div class="rs-tb-aside">
    <aside>
      <rs-tb-aside-title :initTitleName="url" @apiTestResultEvent="onClickChild"></rs-tb-aside-title>
      <rs-tb-aside-contents :initTitleName="url" :initApiTestResult="apiTestResult"></rs-tb-aside-contents>
    </aside>
  </div>
</template>

<script>
/* eslint-disable */
import RsTbAsideTitle from './RsTbAside/RsTbAsideTitle'
import RsTbAsideContents from "./RsTbAside/RsTbAsideContents"

export default {
  props: ['url'],
  name: 'rs-tb-aside',
  mounted() {
    $('aside').css('width', screen.width * 0.4)
    $('aside').css('marginLeft', screen.width * 0.6)
  },
  created: function () {
  },
  updated: function () {
    // //created 아니면 mounted를 봐서 지금 상태는 고려 없이 ablock으로 넘어가는건데
    // //  url 받아서 g인지 c인지 t인지를 알아내고,
    // // v-if로 변수 지정해서 분
    // console.log(this.url) // 오 여기서 하면 url바뀔 때 마다 바뀐다~~
  },
  components: {
    RsTbAsideContents, RsTbAsideTitle
  },
  data: function () {
    return {
      apiTestResult: null
    }
  },
  methods: {
    onClickChild (value) {
      this.apiTestResult = value
    }
  }
}
</script>

<style scoped>
  aside {
    background-color: white;
    position: absolute;
    padding-top: 60px;
    padding-left: 30px;
    padding-right: 30px;
    height: 100%;
    margin-right: 40px;
    float: right;
    z-index: 1;
    overflow: scroll;
  }
</style>
