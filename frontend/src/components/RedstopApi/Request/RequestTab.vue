<template>
    <div id="request-tab">
      <ul>
        <li v-for="item in 3" :key="item">
          <RequestTabItem :name="headerNames[item-1]"/>
        </li>
      </ul>
    </div>
</template>

<script>
import RequestTabItem from './RequestTabItem'
export default {
  name: 'RequestTab',
  components: {RequestTabItem},
  data: function () {
    return {
      headerNames: ['Params', 'Body', 'Headers']
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/request/request-tab.css'
</style>
