<template>
  <div class="el_content">
    <el-row>
      <el-col :span="12">
        <el-form :model="control" :rules="rules" ref="controlForm" label-width="150px">
          <el-form-item label="控件名称：" prop="name">
            <el-input v-model="control.name" placeholder="请输入控件名称"></el-input>
          </el-form-item>
          <el-form-item label="控件备注：" prop="remark">
            <el-input v-model="control.remark" type="textarea" rows="5" placeholder="请输入控件备注"></el-input>
          </el-form-item>
          <el-form-item label="控件类型：" prop="dataType">
            <el-select v-model="control.dataType" placeholder="请选择控件类型" class="el_long">
              <el-option v-for="item in conList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="SQL语句：" prop="dataContent">
            <el-input v-model="control.dataContent" type="textarea" rows="5" placeholder="请输入标准的SQL语句"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('controlForm')">保存</el-button>
            <el-button @click="getReview('controlForm')">预览</el-button>
            <el-button @click="resetForm('controlForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <!-- 预览 -->
    <el-dialog title="预览" :visible.sync="review" width="600" center>
      <div class="review_tools">
        <!-- select -->
        <template v-if="control.dataType === '1'">
          <div class="el_name" v-html="control.name?control.name+'：':'控件名称：'"></div>
          <div class="el_tool">
            <el-select v-model="value" placeholder="请选择" class="el_long">
              <el-option v-for="item in reviewSelect" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </div>
        </template>
        <!-- treeList -->
        <template v-else>
          <div class="el_name" v-html="control.name?control.name+'：':'控件名称：'"></div>
          <div class="el_tool">
            <el-select ref="treeList" v-model="value" placeholder="请选择" class="el_long">
              <el-option :key="value" :label="value" :value="value">
                <el-tree :data="tree" accordion :props="defaultProps" @node-click="handleNodeClick"></el-tree>
              </el-option>
            </el-select>
          </div>
        </template>
      </div>
      <div solt="footer" class="dialog_footer">
        <el-button @click="review = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'control',
    data() {
      return {
        review: false,
        control: {
          name: '',
          remark: '',
          dataType: '1',
          dataContent: ''
        },
        conList: [{
          name: '下拉框',
          id: '1'
        }, {
          name: '树形下拉框',
          id: '2'
        }],
        rules: {
          name: [
            {required: true, message: '请输入控件名称', trigger: 'blur'},
          ],
          dataContent: [
            {required: true, message: '请输入标准的SQL语句', trigger: 'blur'}
          ]
        },
        reviewSelect: [{
          id: '1',
          name: '测试下拉1'
        }, {
          id: '2',
          name: '测试下拉2'
        }, {
          id: '3',
          name: '测试下拉3'
        }],
        tree: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        value: '1'
      }
    },
    watch: {
      review(val) {
        if (val && this.control.dataType === '1')
          this.value = '1';
        else
          this.value = '一级 1';
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message.info('submit!');
          } else {
            this.$message.info('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      /* review */
      getReview(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.review = true;
          } else {
            this.$message.error('请正确填写表单');
            return false;
          }
        });
      },
      /* treeList */
      handleNodeClick(data) {
        let $this = this;
        $this.value = data.label;
        if (data)
          $this.$refs['treeList'].blur();
      }
    }
  }
</script>
<style lang="less" type="text/less">
  .el-select-dropdown__item {
    height: auto !important;
  }

  .el-select {
    width: 100%;
  }
</style>
