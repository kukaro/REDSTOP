<template>
  <div id="redstop-api">
    <ApiTitle></ApiTitle><br>
    <SetApi></SetApi>
    <SetAssert></SetAssert><br>
    <SetRequest></SetRequest>
  </div>
</template>

<script>
import ApiTitle from './ApiTitle'
import SetApi from './SetApi'
import SetAssert from './SetAssert'
import SetRequest from './SetRequest'
export default {
  name: 'RedstopApi',
  components: {SetRequest, SetAssert, SetApi, ApiTitle}
}
</script>

<style scoped>
  #redstop-api {
    margin-top: 60px;
    margin-left: 60px;
    margin-right: 40px;
  }
</style>
