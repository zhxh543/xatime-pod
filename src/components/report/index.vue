<template>
  <div class="el_content">
    <el-row>
      <el-col :span="12">
        <el-form :model="data" :rules="rules" ref="dataForm" label-width="150px">
          <el-form-item label="数据源名称：" prop="name">
            <el-input v-model="data.name" placeholder="请输入数据源名称"></el-input>
          </el-form-item>
          <el-form-item label="数据源备注：" prop="remark">
            <el-input v-model="data.remark" type="textarea" rows="5" placeholder="请输入数据源备注"></el-input>
          </el-form-item>
          <el-form-item label="数据类型：" prop="dataType">
            <el-radio v-model="data.dataType" label="1">mysql</el-radio>
            <el-radio v-model="data.dataType" label="2">oracle</el-radio>
            <el-radio v-model="data.dataType" label="3">mssql</el-radio>
          </el-form-item>
          <el-form-item label="主机名称：" prop="hostName">
            <el-input v-model="data.hostName" placeholder="请输入主机名称"></el-input>
          </el-form-item>
          <el-form-item label="数据库名：" prop="dataBaseName">
            <el-input v-model="data.dataBaseName" placeholder="请输入数据库名"></el-input>
          </el-form-item>
          <el-form-item label="端口号：" prop="protNumber">
            <el-input v-model="data.protNumber" placeholder="请输入端口号"></el-input>
          </el-form-item>
          <el-form-item label="用户名：" prop="userName">
            <el-input v-model="data.userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="data.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dataForm')">保存</el-button>
            <el-button @click="testForm('dataForm')">测试</el-button>
            <el-button @click="resetForm('dataForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <!-- 名称、备注、数据库类型（mysql/oracle/mssql/）、主机名称、数据库名、端口号、用户名、密码 -->
  </div>
</template>
<script>
  export default {
    name: 'index',
    data() {
      const valParam = (rule, value, callback) => {
        if (value.length < 1)
          callback(new Error('参数不可以为空！'));
        else
          callback();
      };
      return {
        data: {
          name: '',
          remark: '',
          dataType: '1',
          hostName:'',
          dataBaseName:'',
          protNumber:'',
          userName:'',
          password:''
        },
        rules: {
          name: [
            {required: true, message: '请输入数据源名称', trigger: 'blur'},
          ],
          hostName: [
            {required: true, message: '请输入主机名称', trigger: 'blur'},
          ],
          dataBaseName: [
            {required: true, message: '请输入数据库名称', trigger: 'blur'},
          ],
          protNumber: [
            {required: true, message: '请输入端口号', trigger: 'blur'},
          ],
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
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
      },
      testForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message.success('点击了测试');
          } else {
            this.$message.error('请正确填写表单');
            return false;
          }
        });
      }
    }
  }
</script>
