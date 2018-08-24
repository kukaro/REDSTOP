<template>
  <div class="rs-tb-nav-body-tree">
    <li>
      <div :class="{bold: isFolder}" @click="toggle">
        <img v-if="treeData.type=='g'" src="../../assets/img/group.png"/>
        <img v-else-if="treeData.type=='c'" src="../../assets/img/case.png"/>
        <img v-else-if="treeData.type=='a'" src="../../assets/img/api.png"/>
        {{treeData.name}}
        <span v-if="isFolder">{{open ? 'v' : '>'}}</span>
      </div>
      <ul v-show="open" v-if="isFolder">
        <rs-tb-nav-body-tree class="item" v-for="atom in treeData.children" :initTreeData="atom" :key="atom.id">
        </rs-tb-nav-body-tree>
        <li class="add" @click="addChild">+</li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  props: ['initTreeData'],
  name: 'rs-tb-nav-body-tree',
  created: function () {
  },
  data: function () {
    return {
      treeData: this.initTreeData,
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return (this.treeData.type == 'g' || this.treeData.type == 'c')
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    addChild: function () {
      this.treeData.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>

<style scoped>
  .bold {
    font-weight: bold;
  }
  ul {
    width: 100%;
    padding-left: 16px;
    line-height: 1.5em;
    list-style: none;
    list-style-image: url("../../assets/img/case.png");
  }

  ul ul {
    width: 100%;
    padding-left: 16px;
    line-height: 1.5em;
    list-style: none;
    list-style-image: url("../../assets/img/api.png");
  }

</style>
