<template>
  <div class="rs-header-body">
    <div class="menuDiv">
      <ul>
        <rs-header-body-item v-for="item in itemList" :key="item" :initItemName="item"></rs-header-body-item>
      </ul>
    </div>
  </div>
</template>

<script>
import RsHeaderBodyItem from './RsHeaderBodyItem'
export default {
  name: 'rs-header-body',
  components: {RsHeaderBodyItem},
  created: function () {
    this.$http.get('http://localhost:3000/api/header').then((response) => {
      this.itemList = response.data
    })
  },
  data: function () {
    return {
      itemList: {}
    }
  }
}
</script>

<style>
</style>
