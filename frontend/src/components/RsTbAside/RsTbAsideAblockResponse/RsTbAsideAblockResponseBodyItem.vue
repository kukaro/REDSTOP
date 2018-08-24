<template>
    <div class="rs-tb-aside-ablock-response-body-item">
      &emsp;<span class="key-style">"{{key}}"</span>: {{value}},<br>
    </div>
</template>

<script>
export default {
  props: ['initKey', 'initValue'],
  name: 'rs-tb-aside-ablock-response-body-item',
  components: {

  },
  data: function () {
    return {
      key: this.initKey,
      value: this.initValue
    }
  }
}
</script>

<style scoped>
.key-style{
  color: #4a5be2;
}
.value-style{

}
</style>
