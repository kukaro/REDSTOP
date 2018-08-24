<template>
  <div class="rs-tb-nav">
    <div class="treeView">
      <rs-tb-nav-header></rs-tb-nav-header>
      <rs-tb-nav-body></rs-tb-nav-body>
    </div>
  </div>
</template>

<script>
import RsTbNavHeader from './RsTbNav/RsTbNavHeader'
import RsTbNavBody from './RsTbNav/RsTbNavBody'
export default {
  name: 'rs-tb-nav',
  components: {RsTbNavBody, RsTbNavHeader}
}
</script>

<style>
  .treeView {
    position: absolute;
    top: 70px;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: #ffffff;
  }
  .treeViewMenu > li {
    list-style: none;
    float: left;
    width: 50%;
    height: 60px;
    text-align: center;
    color: #7F7F7F;
    font-size: 18px;
    line-height: 60px;
    cursor: pointer;
  }

  .treeViewMenu > li:first-child {
    color: #000;
  }
</style>
