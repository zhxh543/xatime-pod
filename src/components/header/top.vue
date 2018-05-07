<template>
  <div class="top">
    <a class="logo">
      <img src="./img/logo.png" alt="logo">
    </a>
    <ul>
      <li>
        <i class="el-icon-setting"></i>
      </li>
      <li>
        <i class="el-icon-time"></i>
      </li>
      <li>
        <i class="el-icon-bell"></i>
        <sub>&nbsp;</sub>
      </li>
      <li>
        <img src="./img/photo.jpg" alt="photo">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'top',
    data() {
      return {}
    }
  }
</script>
<style scoped lang="less" type="text/less">
  .top {
    width: 100%;
    height: 88px;
    background: #373737;
    line-height: 88px;
    overflow: hidden;
    color: #b7b7b7;
    .logo {
      display: block;
      float: left;
      img {
        width: auto;
        height: 100%;
        margin: 0 20px;
      }
    }
    ul {
      float: right;
      overflow: hidden;
      li {
        float: left;
        padding: 0 35px;
        font-size: 30px;
        border-left: 1px solid #333333;
        position: relative;
        img {
          width: 48px;
          height: 48px;
          border-radius: 100%;
        }
        sub {
          display: block;
          width: 12px;
          height: 12px;
          text-align: center;
          background: #ff0000;
          border-radius: 100%;
          position: absolute;
          right: 35px;
          top: 30px;
        }
      }
    }
  }
</style>
