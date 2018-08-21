<template>
  <li class="rs-header-body-item">
    <a :href="'#/'+itemName">{{itemName}}</a>
  </li>
</template>

<script>
import casing from 'eslint-plugin-vue/lib/utils/casing'

export default {
  props: ['initItemName'],
  name: 'rs-header-body-item',
  created: function () {
    this.itemName = casing.getConverter('kebab-case')(this.itemName)
  },
  data: function () {
    return {
      itemName: this.initItemName
    }
  }
}
</script>

<style scoped>
a {
  float: left;
  width: 140px;
  font-size: 18px;
  text-align: center;
  line-height: 70px;
  color: #8B95AC;
  text-decoration: none;
}
</style>
