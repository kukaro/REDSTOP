<template>
  <div class="rs-mr-board" @click="click">
    <rs-mr-card-mini-total-apis :init-x-pos="1" :init-y-pos="1" :init-api-cnt="43"/>
    <rs-mr-card-mini-total-availability :init-x-pos="2" :init-y-pos="1" :init-percent="98"/>
    <rs-mr-card-mini-avg-p95 :init-x-pos="3" :init-y-pos="1" :init-avg="2" :init-p95="4.4"/>
    <rs-mr-card-mini-check-point :init-x-pos="4" init-y-pos="1" :init-running="40" :init-false-cnt="1" :init-inactive="40" :init-total="43"/>
    <rs-mr-card-mini-response-time :init-x-pos="1" init-y-pos="2" :init-width="4" :init-height="2"/>
    <rs-mr-card-mini-availability-chart :init-x-pos="1" :init-y-pos="4" :init-width="4" :init-height="2"/>
    <rs-mr-card-mini-table :init-x-pos="1" :init-y-pos="6" :init-width="2" :init-height="2" :init-title="'Heavy Latency'" :init-dangerous="3" :init-table-value="heavyLatencyTableValue"/>
    <rs-mr-card-mini-table :init-x-pos="3" :init-y-pos="6" :init-width="2" :init-height="2" :init-title="'Error'" :init-dangerous="3" :init-table-value="errorTableValue"/>
    <rs-mr-card-mini-regional-analysis :init-x-pos="5" :init-y-pos="1" :init-height="5" :init-width="2"/>
    <rs-mr-card-mini-problem-issue :init-x-pos="5" :init-y-pos="6" :init-width="2" :init-height="2"/>
  </div>
</template>

<script>
/* eslint-disable */
import RsUtilText from '../RsUtil/RsUtilText'
import RsMrCardMiniTotalApis from './RsMrCard/RsMrCardMiniTotalApis'
import RsMrCardMiniTotalAvailability from './RsMrCard/RsMrCardMiniAvailability'
import RsMrCardMiniAvgP95 from './RsMrCard/RsMrCardMiniAvgP95'
import RsMrCardMiniCheckPoint from './RsMrCard/RsMrCardMiniCheckPoint'
import RsMrCardMiniResponseTime from './RsMrCard/RsMrCardMiniResponseTime'
import RsMrCardMiniAvailabilityChart from './RsMrCard/RsMrCardMiniAvailabilityChart'
import RsMrCardMiniTable from './RsMrCard/RsMrCardMiniTable'
import RsMrCardMiniRegionalAnalysis from './RsMrCard/RsMrCardMiniRegionalAnalysis'
import RsMrCardMiniProblemIssue from './RsMrCard/RsMrCardMiniProblemIssue'
export default {
  name: 'rs-mr-board',
  components: {
    RsMrCardMiniProblemIssue, RsMrCardMiniRegionalAnalysis, RsMrCardMiniTable, RsMrCardMiniAvailabilityChart,
    RsMrCardMiniResponseTime, RsMrCardMiniCheckPoint, RsMrCardMiniAvgP95, RsMrCardMiniTotalAvailability, RsMrCardMiniTotalApis, RsUtilText},
  data: function () {
    return {
      heavyLatencyTableValue: [
        {
          'Name': 'BlogList',
          'URL': 'redstop.com/blog/list',
          'Type': 'HTTPS',
          'Response Time': 7385,
          'Test Time': '2018.07.12 18:34:11'
        },
        {
          'Name': 'SignUp',
          'URL': 'redstop.com/blog/sign-up',
          'Type': 'HTTP',
          'Response Time': 7543,
          'Test Time': '2018.07.12 20:12:09'
        },
        {
          'Name': 'Login',
          'URL': 'redstop.com/blog/login',
          'Type': 'HTTPS',
          'Response Time': 7847,
          'Test Time': '2018.07.12 20:38:25'
        },
        {
          'Name': 'Logout',
          'URL': 'redstop.com/blog/logout',
          'Type': 'HTTP',
          'Response Time': 7384,
          'Test Time': '2018.07.12 21:01:00'
        },
        {
          'Name': 'Upload',
          'URL': 'redstop.com/blog/upload',
          'Type': 'HTTPS',
          'Response Time': 7543,
          'Test Time': '2018.07.12 21:21:14'
        },
        {
          'Name': 'ImageUpload',
          'URL': 'redstop.com/blog/image-upload',
          'Type': 'HTTPS',
          'Response Time': 7843,
          'Test Time': '2018.07.12 21:38:15'
        },
        {
          'Name': 'VisitRank',
          'URL': 'redstop.com/blog/visit-rank',
          'Type': 'HTTPS',
          'Response Time': 7384,
          'Test Time': '2018.07.12 21:47:58'
        }
      ],
      errorTableValue: [
        {
          'Name': 'BlogList',
          'URL': 'redstop.com/blog/list',
          'Type': 'HTTPS',
          'Status': 404,
          'Test Time': '2018.07.12 18:34:11'
        },
        {
          'Name': 'SignUp',
          'URL': 'redstop.com/blog/sign-up',
          'Type': 'HTTP',
          'Status': 500,
          'Test Time': '2018.07.12 20:12:09'
        },
        {
          'Name': 'Login',
          'URL': 'redstop.com/blog/login',
          'Type': 'HTTPS',
          'Status': 404,
          'Test Time': '2018.07.12 20:38:25'
        },
        {
          'Name': 'Logout',
          'URL': 'redstop.com/blog/logout',
          'Type': 'HTTP',
          'Status': 500,
          'Test Time': '2018.07.12 21:01:00'
        },
        {
          'Name': 'Upload',
          'URL': 'redstop.com/blog/upload',
          'Type': 'HTTPS',
          'Status': 404,
          'Test Time': '2018.07.12 21:21:14'
        },
        {
          'Name': 'ImageUpload',
          'URL': 'redstop.com/blog/image-upload',
          'Type': 'HTTPS',
          'Status': 500,
          'Test Time': '2018.07.12 21:38:15'
        },
        {
          'Name': 'VisitRank',
          'URL': 'redstop.com/blog/visit-rank',
          'Type': 'HTTPS',
          'Status': 404,
          'Test Time': '2018.07.12 21:47:58'
        }
      ]
    }
  }
  ,
  methods: {
    click: function () {
      //TODO 지워야할 것
      document.location.href = 'http://localhost:8080/#/temp'
    }
  }
}
</script>

<style scoped>
.rs-mr-board {
  margin-top: 10px;
}
</style>
