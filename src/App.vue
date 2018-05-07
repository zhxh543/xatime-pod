<template>
  <div id="app">
    <el-container>
      <el-header>
        <vheader></vheader>
      </el-header>
    </el-container>
    <el-container>
      <el-aside>
        <vleft></vleft>
      </el-aside>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="24">
            <router-view></router-view>
          </el-col>
          <!--<el-col :span="5">-->
            <!--<vright></vright>-->
          <!--</el-col>-->
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import vheader from '@/components/header/top.vue'
  import vleft from '@/components/aside/left.vue'
  // import vright from '@/components/aside/right.vue'

  export default {
    name: 'app',
    data() {
      return {}
    },
    methods: {},
    components: {
      vheader,
      vleft,
      // vright
    }
  }
</script>
<style scoped>
  .el-header {
    padding: 0;
    height: auto !important;
  }

  .el-aside {
    width: auto !important;
    min-height: calc(100vh - 88px);
  }
</style>

