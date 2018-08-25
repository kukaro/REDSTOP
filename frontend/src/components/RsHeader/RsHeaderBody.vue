<template>
  <div class="rs-header-body">
    <div class="menuDiv">
      <ul>
        <li v-for="(value, key) in itemList" :key="key" @click="mouseClick(key)">
          <rs-header-body-item :initItemName="value" :initIsClick="clickNumber==key"></rs-header-body-item>
        </li>
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
      console.log(this.itemList)
    })
  },
  data: function () {
    return {
      clickNumber: 0,
      itemList: []
    }
  },
  methods: {
    mouseClick: function (key) {
      console.log('클릭햇음')
      this.clickNumber = key
    }
  }
}
</script>

<style>
</style>
