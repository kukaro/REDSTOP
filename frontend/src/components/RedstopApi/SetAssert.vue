<template>
    <div id="set-assert">
      <AssertTitle></AssertTitle>
      <AssertAdd></AssertAdd>
      <br>
    </div>
</template>

<script>
import AssertTitle from './Assert/AssertTitle'
import AssertAdd from './Assert/AssertAdd'
export default {
  name: 'SetAssert',
  components: {AssertAdd, AssertTitle}
}
</script>

<style scoped>
  #set-assert{
    padding-top: 30px;
  }
</style>
