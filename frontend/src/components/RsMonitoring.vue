<template>
  <div class="rs-monitoring">
    <rs-header-project></rs-header-project>
    <rs-calendar></rs-calendar>
    <ul>
      <li v-for="(value,key) in apiList" :key="key">
        <RsMonitoringItem :initApi="value"></RsMonitoringItem>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import RsHeaderProject from './RsHeader/RsHeaderProject'
import RsCalendar from './RsMonitoring/RsCalendar'
import RsMonitoringItem from './RsMonitoring/RsMonitoringItem'
export default {
  name: 'rs-monitoring',
  components: {RsHeaderProject, RsCalendar, RsMonitoringItem},
  created () {
    this.$http.get('http://localhost:3000/api/apiList')
      .then((response) => {
        this.apiList = response.data
      })
  },
  data: function () {
    return {
      apiList: []
    }
  }
}
</script>

<style scoped>
  * {
    width: 100vw;
    margin-top: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  li {
    width: 60px;
    height: 60px;
    float: left;
  }
</style>
