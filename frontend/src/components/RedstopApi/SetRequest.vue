<template>
    <div id="set-request">
      <RequestTitle></RequestTitle>
      <RequestTab></RequestTab>
    </div>
</template>

<script>
import RequestTitle from './Request/RequestTitle'
import RequestTab from './Request/RequestTab'
export default {
  name: 'SetRequest',
  components: {RequestTab, RequestTitle}
}
</script>

<style scoped>
  #set-assert{
    padding-top: 30px;
  }
</style>
