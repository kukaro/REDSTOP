<template>
  <div class="rs-tb-nav-body">
    <div>
      <ul>
        <rs-tb-nav-body-tree :initTreeData="treeData"></rs-tb-nav-body-tree>
      </ul>
    </div>
  </div>
</template>

<script>
import RsTbNavBodyTree from './RsTbNavBodyTree'
export default {
  name: 'rs-tb-nav-body',
  components: {RsTbNavBodyTree},
  data: function () {
    return {
      treeData: {
        name: 'User Management',
        type: 'g',
        children: [{
          name: 'Sign',
          type: 'g',
          children: [{
            name: 'Sign Up',
            type: 'c'
          },
          {
            name: 'Sign In',
            type: 'c'
          },
          {
            name: 'Sign Out',
            type: 'c'
          },
          {
            name: 'Verify Email',
            type: 'c'
          }]
        },
        {
          name: 'Preferences',
          type: 'g',
          children: [{
            name: 'Change User Info',
            type: 'c',
            children: [{
              name: 'Post',
              type: 'a',
              method: 'post'
            },
            {
              name: 'Verify Email',
              type: 'a',
              method: 'get'
            },
            {
              name: 'Sign in',
              type: 'a',
              method: 'post'
            }
            ]
          }]
        }]
      }
    }
  }
}
</script>

<style>

  rs-tb-nav-body-tree {
    width: 100%;
    margin-top: 16px;
    padding-left: 40px;
    line-height: 2.5em;
    list-style-image: url("../../assets/img/group.png");
  }

</style>
