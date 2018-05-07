<template>
  <div class="content_user">
    <div class="box_container">
      <el-row :gutter="14">
        <el-col :span="16">
          <div class="box">
            <div class="box_title">用户运营</div>
            <div class="box_content">
              <el-row :gutter="14">
                <el-col :span="8">
                  <div class="box_item">
                    <p>总用户</p>
                    <h2>2134</h2>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="box_item">
                    <p>活跃用户（今）</p>
                    <h2>1538</h2>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="box_item">
                    <p>新增用户（今）</p>
                    <h2>1538</h2>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="box">
            <div class="box_title">财务运营</div>
            <div class="box_content">
              <el-row :gutter="14">
                <el-col :span="12">
                  <div class="box_item">
                    <div>
                      <p>今日订单</p>
                      <h2>36</h2>
                    </div>
                    <a class="btn_item" href="javascript:void(0);">查看</a>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="box_item">
                    <div>
                      <p>今日收入（元）</p>
                      <h2>1538</h2>
                    </div>
                    <a class="btn_item" href="javascript:void(0);">提现</a>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="box_container">
      <div class="box">
        <div class="box_title">审核管理</div>
        <div class="box_content box_exa">
          <el-row :gutter="14">
            <el-col :span="6">
              <div class="box_exa_item">
                <img src="./img/img.jpg" alt="">
                <div>
                  <div>
                    <i class="el-icon-loading"></i>
                    <h2>推送审核</h2>
                    <p>待审核：223</p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="exa_item">
                <div>
                  <img src="./img/img.jpg" alt="">
                  <div>
                    <div>
                      <i class="el-icon-loading"></i>
                      <h2>推送审核</h2>
                      <p>待审核：223</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="./img/img.jpg" alt="">
                  <div>
                    <div>
                      <i class="el-icon-loading"></i>
                      <h2>推送审核</h2>
                      <p>待审核：223</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="box_exa_item">
                <img src="./img/img.jpg" alt="">
                <div>
                  <div>
                    <i class="el-icon-loading"></i>
                    <h2>推送审核</h2>
                    <p>待审核：223</p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="exa_item">
                <div>
                  <img src="./img/img.jpg" alt="">
                  <div>
                    <div>
                      <i class="el-icon-loading"></i>
                      <h2>推送审核</h2>
                      <p>待审核：223</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="./img/img.jpg" alt="">
                  <div>
                    <div>
                      <i class="el-icon-loading"></i>
                      <h2>推送审核</h2>
                      <p>待审核：223</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {}
  }
}
</script>
<style lang="less">
.box_container{
  margin-bottom: 20px;
}
.box {
  width: 100%;
  height: auto;
  background: #ffffff;
  border: 1px solid #d2dae9;
  .box_title {
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #f8f8f8;
    color: #666;
    padding: 0 20px;
  }
  .box_content {
    width: 100%;
    height: auto;
    padding: 20px;
    .box_item {
      background: #f7f7f7;
      text-align: center;
      height: 120px;
      padding: 30px 0;
      line-height: 2;
      p {
        font-size: 12px;
        color: #999;
      }
      h2 {
        font-size: 24px;
        color: #30b8fe;
      }
      div{
        width: 100%;
        height: 85px;
        border: 1px solid #dfdfdf;
        border-bottom-style: dashed;
        margin-top: -30px;
        padding-top: 10px;
      }
      a.btn_item{
        display: block;
        width: 100%;
        height: 35px;
        border: 1px solid #dfdfdf;
        border-top: none;
        font-size: 12px;
        color: #666;
        line-height: 34px;
        &:hover{
          color: #30b8fe;
        }
      }
    }
  }
  .box_exa{
    height: 360px;
    .box_exa_item{
      width: 100%;
      height: 320px;
      overflow: hidden;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
      &:hover>div{
        top: 0;
      }
      &>div{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .7);
        position: absolute;
        z-index: 2;
        left: 0;
        top: 100%;
        transition: all .3s ease-in-out;
        div{
          width: 100%;
          height: auto;
          text-align: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          color: #ffffff;
          i{
            font-size: 30px;
            margin-bottom: 20px;
          }
          h2{
            font-size: 16px;
            line-height: 2;
          }
          p{
            font-size: 14px;
          }
        }
      }
    }
    .exa_item{
      width: 100%;
      height: 320px;
      &>div{
        width: 100%;
        height: 153px;
        background: #000;
        color: #ffffff;
        overflow: hidden;
        position: relative;
        &:last-child{
          margin-top: 14px;
        }
        &:hover>div{
        top: 0;
        }
        &>div{
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, .7);
          position: absolute;
          z-index: 2;
          left: 0;
          top: 100%;
          transition: all .3s ease-in-out;
          div{
            width: 100%;
            height: auto;
            text-align: center;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            color: #ffffff;
            i{
              font-size: 30px;
              margin-bottom: 20px;
            }
            h2{
              font-size: 16px;
              line-height: 2;
            }
            p{
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>