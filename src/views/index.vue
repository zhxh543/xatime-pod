<template>
    <div id="a">
        <template>
            <el-select ref="select" v-model="value" placeholder="请选择">
                <el-option :key="value" :label="value" :value="value">
                    <el-tree :data="tree" accordion :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </el-option>
            </el-select>
            <router-link to="/drag">自定义报表</router-link>
        </template>
    </div>
</template>
<style>
    .el-select-dropdown__item{
        height: auto !important;
    }
    .el-select{
        width: 100%;
    }
</style>
<script>
    export default {
        data() {
            return {
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
                value: '',
                label:''
            };
        },
        methods: {
            handleNodeClick(data) {
                let $this = this;
                $this.value = data.label;
                if(data)
                    $this.$refs['select'].blur();
            }
        },
        mounted() {
            // console.log(this.options);
        }
    };
</script>