<template>
  <div class="el_content">
    <el-row>
      <el-col :span="12">
        <el-form :model="report" :rules="rules" ref="reportForm" label-width="150px">
          <el-form-item label="报表分类：" prop="type" class="el_add_group">
            <el-select v-model="report.type" placeholder="请选择报表分类" class="el_long el_group_input">
              <el-option v-for="item in reportList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-button size="small">添加分类</el-button>
          </el-form-item>
          <el-form-item label="报表名称：" prop="name">
            <el-input v-model="report.name" placeholder="请输入报表名称"></el-input>
          </el-form-item>
          <el-form-item label="报表备注：" prop="remark">
            <el-input v-model="report.remark" type="textarea" rows="5" placeholder="请输入报表备注"></el-input>
          </el-form-item>
          <el-form-item label="数据集：" prop="type">
            <el-select v-model="report.data" placeholder="请选择数据集" class="el_long">
              <el-option v-for="item in dataList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('reportForm')">保存</el-button>
            <el-button @click="resetForm('reportForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'report',
    data() {
      const valParam = (rule, value, callback) => {
        if (value.length < 1)
          callback(new Error('参数不可以为空！'));
        else
          callback();
      };
      return {
        report: {
          name: '',
          remark: '',
          type: '1',
          data:'1'
        },
        reportList:[{
          id:'1',
          name:'销售报表'
        },{
          id:'2',
          name:'重印报表'
        }],
        dataList:[{
          id:'1',
          name:'数据集1'
        },{
          id:'2',
          name:'数据集2'
        }],
        rules: {
          name: [
            {required: true, message: '请输入报表名称', trigger: 'blur'},
          ]
        }
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
      }
    }
  }
</script>
