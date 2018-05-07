<template>
  <div class="left">
    <ul class="nav" :class="{'active':menuActive}">
      <li>
        <router-link to="/userContent" @click.native="menuActive = false">
          <i class="el-icon-document"></i>
          <span>概览</span>
        </router-link>
      </li>
      <li>
        <router-link to="/reportContent" @click.native="menuActive = true">
          <i class="el-icon-document"></i>
          <span>数据报表</span>
        </router-link>
        <dl>
          <dd><p>报表自定义</p></dd>
          <dd>
            <router-link to="/reportContent/index">配置数据源</router-link>
          </dd>
          <dd>
            <router-link to="/reportContent/control">公共控件</router-link>
          </dd>
          <dd>
            <router-link to="/reportContent/dataSet">设置数据集</router-link>
          </dd>
          <dd>
            <router-link to="/reportContent/report">创建报表</router-link>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'left',
    data() {
      return {
        menuActive: false
      }
    },
    methods: {},
    mounted() {
      if (this.$route.path === '/userContent' || this.$route.path === '/') {
        this.menuActive = false
      } else {
        this.menuActive = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .left {
    width: 180px;
    height: 100%;
    background: #373737;
    border-right: 1px solid #d2dae9;
  }

  .nav.active a {
    width: 50px;
    overflow: hidden;
  }

  .nav.active span {
    display: none;
  }

  .nav a {
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #b7b7b7;
    font-size: 14px;
    transition: all .3s ease-in-out;
  }

  .nav a i {
    font-size: 22px;
  }

  .nav span {
    margin-left: 10px;
  }

  .nav a:hover, .nav a.linkActive {
    background: #ffffff;
    color: #666;
  }

  .nav dl a:hover, .nav dl a.linkActive {
    background: #fff;
    color: #666;
  }

  .nav {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  dl {
    width: 129px;
    position: absolute;
    right: -130px;
    top: 0;
    background: #eee;
    height: 100vh;
    z-index: 9;
    transition: all .3s ease-in-out;
    overflow: hidden;
    dd{
      p{
        font-size: 16px;
        color: #333333;
        text-align: center;
        line-height: 50px;
        font-weight: bold;
      }
    }
  }

  .nav.active dl {
    right: 0;
  }

  .nav dl a {
    width: 100% !important;
    color: #666;
    font-size: 14px;
  }
</style>
