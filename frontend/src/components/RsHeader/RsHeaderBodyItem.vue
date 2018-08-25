<template>
  <div class="rs-header-body-item">
    <a :href="'#/'+itemKebabName" :class="{'active':isOver | isClick}" @mouseover="mouseOver" @mouseleave="mouseLeave">{{itemName}}</a>
  </div>
</template>

<script>
import casing from 'eslint-plugin-vue/lib/utils/casing'

export default {
  props: ['initItemName', 'initIsClick'],
  name: 'rs-header-body-item',
  watch: {
    initIsClick: function () {
      this.isClick = this.initIsClick
    }
  },
  created: function () {
    this.itemKebabName = casing.getConverter('kebab-case')(this.itemKebabName)
  },
  data: function () {
    return {
      itemName: this.initItemName,
      itemKebabName: this.initItemName,
      isOver: false,
      isClick: this.initIsClick
    }
  },
  methods: {
    mouseOver: function (e) {
      this.isOver = true
    },
    mouseLeave: function (e) {
      this.isOver = false
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

.active{
  color: white;
}

</style>
