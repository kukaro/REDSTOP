<template>
    <div id="request-tab">
      <ul>
        <li v-for="item in 4" :key="item">
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
#request-icon{
  padding-right: 10px;
}
</style>
