<template>
  <div class="el_content">
    <el-row>
      <el-col :span="12">
        <el-form :model="report" :rules="rules" ref="reportForm" label-width="150px">
          <el-form-item label="数据集名称：" prop="name">
            <el-input v-model="report.name" placeholder="请输入数据集名称"></el-input>
          </el-form-item>
          <el-form-item label="数据集备注：" prop="remark">
            <el-input v-model="report.remark" type="textarea" rows="5" placeholder="请输入数据集备注"></el-input>
          </el-form-item>
          <el-form-item label="数据类型：" prop="dataType">
            <el-radio v-model="report.dataType" label="1">SQL</el-radio>
            <el-radio v-model="report.dataType" label="2">存储过程</el-radio>
          </el-form-item>
          <el-form-item label="操作语句：" prop="dataContent">
            <el-input v-model="report.dataContent" type="textarea" rows="5" placeholder="请输入标准的操作语句"></el-input>
          </el-form-item>
          <el-form-item label="配置参数：" prop="paramList">
            <el-button @click="modal = true">添加参数</el-button>
            <template v-for="(item,index) in report.paramList" v-if="report.paramList.length > 0">
              <div class="el_tools" v-if="item.group && item.group.length > 0">
                <template v-for="(itm,idx) in item.group">
                  <div class="el_name" v-html="itm.name + '(' + itm.key + ')：'"></div>
                  <div class="el_tool">{{item.type | control}}</span></div>
                </template>
              </div>
              <div class="el_tools" v-else>
                <div class="el_name" v-html="item.name + '(' + item.key + ')：'"></div>
                <div class="el_tool">{{item.type | control}} -- <span v-if="item.paramId">{{item.paramId | controlType}}</span></div>
              </div>
            </template>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('reportForm')">保存</el-button>
            <el-button>测试</el-button>
            <el-button @click="resetForm('reportForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>


    <el-dialog title="设置参数" :visible.sync="modal" width="1000" center>
      <el-tabs v-model="activeParam">
        <el-tab-pane label="普通控件" name="1">
          <el-form :model="paramOrd" :rules="rulesOrd" ref="paramOrdForm" label-width="150px">
            <el-form-item label="控件类型：" prop="type">
              <el-select v-model="paramOrd.type" placeholder="请选择" class="el_long">
                <el-option v-for="item in paramType" :key="item.type" :label="item.name" :value="item.type"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="label：" prop="name" v-if="paramOrd.type !== 'radio' && paramOrd.type !== 'checkbox'">
              <el-input v-model="paramOrd.name" placeholder="请输入控件label"></el-input>
            </el-form-item>
            <el-form-item label="key：" prop="key">
              <el-input v-model="paramOrd.key" placeholder="请输入控件的name(必须为英文或者英文数字组合，英文开头)"></el-input>
            </el-form-item>
            <el-form-item label="添加控件：" v-if="paramOrd.type === 'radio' || paramOrd.type === 'checkbox'">
              <el-button size="small" @click="addGroup">添加{{paramOrd.type === 'radio'?'单选框':'复选框'}}</el-button>
              <template v-for="(item,index) in paramOrd.group" v-if="paramOrd.group.length > 0">
                <div class="el_tools">
                  <div class="el_name" v-html="(paramOrd.type === 'radio'?'单选框 ':'复选框 ') + (index+1) + ' label：'"></div>
                  <el-input v-model="item.name" class="el_tool" placeholder="请输入控件label"></el-input>
                </div>
              </template>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="paramForm('paramOrdForm')">添加</el-button>
              <el-button @click="modal = false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="公共控件" name="2">
          <el-form :model="paramAll" :rules="rulesAll" ref="paramAllForm" label-width="150px">
            <el-form-item label="控件类型：" prop="type">
              <el-select v-model="paramAll.type" placeholder="请选择" class="el_long">
                <el-option v-for="item in paramAllType" :key="item.type" :label="item.name" :value="item.type"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公共控件：" prop="type">
              <el-select v-model="paramAll.paramId" placeholder="请选择" class="el_long">
                <el-option v-for="item in allParam" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="label：" prop="name" v-if="paramOrd.type !== 'radio' && paramOrd.type !== 'checkbox'">
              <el-input v-model="paramAll.name" placeholder="请输入控件label"></el-input>
            </el-form-item>
            <el-form-item label="key：" prop="key">
              <el-input v-model="paramAll.key" placeholder="请输入控件的name(必须为英文或者英文数字组合，英文开头)"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="allForm('paramAllForm')">添加</el-button>
              <el-button @click="modal = false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
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
      const typeChange = (rule, value, callback) => {
        this.paramOrd.group = [];
        callback();
      };
      return {
        /* 设置参数 */
        paramOrd: {
          type: 'input',
          name: '',
          key: '',
          group: []
        },
        paramType: [{
          type: 'input',
          name: '文本框'
        }, {
          type: 'radio',
          name: '单选框'
        }, {
          type: 'checkbox',
          name: '复选框'
        }, {
          type: 'datebox1',
          name: '日期选择'
        }, {
          type: 'datebox2',
          name: '日期段选择'
        }],
        rulesOrd: {
          type: [
            // {validator: typeChange, trigger: 'change'}
          ]
        },
        /* 公共控件 */
        paramAll: {
          type: 'select',
          name: '',
          key: '',
          paramId: '1'
        },
        paramAllType: [{
          type: 'select',
          name: '下拉框'
        }, {
          type: 'treeSelect',
          name: '树形下拉框'
        }],
        allParam: [{
          name: '公共控件1',
          id: '1'
        }, {
          name: '公共控件2',
          id: '2'
        }],
        rulesAll: {},

        modal: false,
        activeParam: '1',
        report: {
          name: '',
          remark: '',
          dataType: '1',
          dataContent: '',
          paramList: []
        },
        rules: {
          name: [
            {required: true, message: '请输入数据集名称', trigger: 'blur'},
          ],
          dataContent: [
            {required: true, message: '请输入标准的操作语句', trigger: 'blur'},
          ],
          paramList: [
            {validator: valParam, trigger: 'change'}
          ]
        }
      }
    },
    watch: {
      modal(val, olVal) {
        if (val) {
          this.$nextTick(function () {
            this.$refs['paramOrdForm'].clearValidate();
            this.$refs['paramAllForm'].clearValidate();
            this.paramOrd = {
              type: 'input',
              name: '',
              key: '',
              group: []
            };
            this.paramAll = {
              type: 'select',
              name: '',
              key: '',
              paramId: '1'
            };
          });
          this.activeParam = '1';
        }
      }
    },
    filters: {
      control(val) {
        switch (val) {
          case 'input':
            return '文本框';
            break;
          case 'radio':
            return '单选框';
            break;
          case 'checkbox':
            return '复选框';
            break;
          case 'datebox1':
            return '日期选择';
            break;
          case 'datebox2':
            return '日期段选择';
            break;
          case 'select':
            return '下拉框';
            break;
          case 'treeSelect':
            return '树形下拉框';
            break;
        }
      },
      controlType(val) {
        switch (val) {
          case '1':
            return '公共控件1';
            break;
          case '2':
            return '公共控件2';
            break;
        }
      }
    },
    methods: {
      addGroup() {
        let o = {
          name: '',
          key: this.paramOrd.key
        };
        this.paramOrd.group.push(o);
      },
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
      paramForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let o = {
              type: this.paramOrd.type,
              name: this.paramOrd.name,
              key: this.paramOrd.key,
              group: this.paramOrd.group
            };
            console.log(o);
            this.report.paramList.push(o);
            this.modal = false;
          } else {
            this.$message.info('error submit!!');
            return false;
          }
        });
      },
      allForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let o = {
              type: this.paramAll.type,
              name: this.paramAll.name,
              key: this.paramAll.key,
              paramId: this.paramAll.paramId
            };
            this.report.paramList.push(o);
            this.modal = false;
          } else {
            this.$message.info('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
