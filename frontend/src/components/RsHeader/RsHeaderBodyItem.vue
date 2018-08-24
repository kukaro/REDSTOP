<template>
  <li class="rs-header-body-item">
    <a :href="'#/'+itemKebabName">{{itemName}}</a>
  </li>
</template>

<script>
import casing from 'eslint-plugin-vue/lib/utils/casing'

export default {
  props: ['initItemName'],
  name: 'rs-header-body-item',
  created: function () {
    this.itemKebabName = casing.getConverter('kebab-case')(this.itemKebabName)
  },
  data: function () {
    return {
      itemName: this.initItemName,
      itemKebabName: this.initItemName
    }
  }
}
</script>

<style scoped>
li{
}

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
