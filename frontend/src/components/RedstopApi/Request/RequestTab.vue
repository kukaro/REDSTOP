<template>
    <div id="request-tab">
      <ul>
        <li v-for="(value, key) in headerNames" :key="key" @click="mouseClick(key)">
          <RequestTabItem :name="value" :initIsClick="clickNumber==key"/>
        </li>
      </ul>
    </div>
</template>

<script>
import RequestTabItem from './RequestTabItem'
export default {
  name: 'RequestTab',
  components: {RequestTabItem},
  created: function () {

  },
  data: function () {
    return {
      clickNumber: 0,
      headerNames: ['Params', 'Body', 'Headers']
    }
  },
  methods: {
    mouseClick: function (key) {
      this.clickNumber = key
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/request/request-tab.css'
</style>
