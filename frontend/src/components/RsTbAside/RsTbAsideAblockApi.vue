<template>
    <div class="rs-tb-aside-ablock-api">
      <div class="input-group">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">POST</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">GET</a>
            <a class="dropdown-item" href="#">POST</a>
            <a class="dropdown-item" href="#">PUT</a>
            <a class="dropdown-item" href="#">DELETE</a>
          </div>
        </div>
        <input type="text" class="form-control" aria-label="Text input with dropdown button">
      </div>
    </div>
</template>

<script>
export default {
  name: 'rs-tb-aside-ablock-api'
}
</script>

<style scoped>

</style>
