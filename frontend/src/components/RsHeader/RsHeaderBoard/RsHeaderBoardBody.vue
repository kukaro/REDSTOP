<template>
  <div class="rs-header-board-body">
    <div class="menu-div">
      <div class="outer-input">
        <div class="inner-input">
          <img class="search-icon" src="../../../assets/img/search.png">
          <input type="text" placeholder="Find a user, team, meeting...">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rs-header-board-body'
}
</script>

<style scoped>
  .menu-div {
    position: absolute;
    left: 20%;
    width: 80%;
    height: 70px;
    background-color: #536285;
  }
  .outer-input {
    display: table;
    height: 100%;
  }
  .inner-input {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    background-color: #536285;
  }
  input{
    color: #A5B0C0;
    background-color: transparent;
    border:none;
    width: 250px;
    border-bottom: 2px solid #A5B0C0;
    outline: none;
  }
  .search-icon{
    margin-left: 10px;
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }
  ::placeholder{
    color: #A5B0C0;
  }
</style>
