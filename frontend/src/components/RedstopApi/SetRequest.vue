<template>
    <div id="set-request">
      <RequestTitle></RequestTitle>
      <RequestTab></RequestTab><br><br>
      <RequestBodyTabTable></RequestBodyTabTable>
    </div>
</template>

<script>
import RequestTitle from './Request/RequestTitle'
import RequestTab from './Request/RequestTab'
import RequestBodyTabTable from './Request/RequestBodyTabTable'
export default {
  name: 'SetRequest',
  components: {RequestBodyTabTable, RequestTab, RequestTitle}
}
</script>

<style scoped>
  #set-assert{
    padding-top: 30px;
  }
</style>
