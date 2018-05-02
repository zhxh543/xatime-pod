<template>
    <div id="custom">
        <el-row :gutter="30">
            <el-col :span="18">
                <div class="custom_box">
                    <draggable :list="tools" v-if="tools.length > 0" :options="{handle:'.custom_label'}">
                        <transition-group>
                            <div v-for="(item,index) in tools" :key="item.id">
                                <div class="tools_item">
                                    <span class="custom_label">这是输入框{{item.id}}：</span>
                                    <el-input v-if="item.type === 'input'"></el-input>
                                </div>
                            </div>
                        </transition-group>
                    </draggable>
                    <template v-else>
                        请在右侧选择需要添加的控件！
                    </template>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="custom_tools">
                    <ul>
                        <li @click="addTool">input输入框</li>
                    </ul>
                </div>
            </el-col>
        </el-row>
        <!--<draggable :list="list2" :move="getdata" @update="datadragEnd" @end="datadragEnd" @start="start" :options="{handle:'.dargDiv'}">-->
        <!--<transition-group name="list-complete" >-->
        <!--<div v-for="element in list2" :key="element.it.name" class="list-complete-item">-->
        <!--<div class="styleclass dargDiv">{{element.id}}</div>-->
        <!--<div class="styleclass">{{element.it.name}}</div>-->
        <!--</div>-->
        <!--</transition-group>-->
        <!--</draggable>-->
        <!--<draggable :list="list" :move="getdata" @update="datadragEnd" @end="datadragEnd" @start="start" :options="{handle:'.dargDiv'}">-->
        <!--<transition-group name="list-complete" >-->
        <!--<div v-for="element in list" :key="element.it.name" class="list-complete-item">-->
        <!--<div class="styleclass dargDiv">{{element.id}}</div>-->
        <!--<div class="styleclass">{{element.it.name}}</div>-->
        <!--</div>-->
        <!--</transition-group>-->
        <!--</draggable>-->
        <!--<el-button @click="addTag">添加元素</el-button>-->

        <!--<div class='drag-content'>-->
        <!--<div class='project-content'>-->
        <!--<div class='select-item' draggable='true' @dragstart='drag($event)' v-for='pjdt in projectdatas'>{{pjdt.name}}</div>-->
        <!--</div>-->
        <!--<div class='people-content'>-->
        <!--<div class='drag-div' v-for='(ppindex,ppdt) in peopledata' @drop='drop($event)' @dragover='allowDrop($event)'>-->
        <!--<div class='select-project-item'>-->
        <!--<label class='drag-people-label'>{{ppindex.name}}：</label>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>
<style>
    body {
        font-family: '微软雅黑';
        margin: 0;
        padding: 0;
    }

    [v-cloak] {
        display: none;
    }

    .custom_box {
        width: 100%;
        min-height: 1px;
        border: 1px solid #ccc;
        padding: 10px;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .custom_tools {
        width: 100%;
        min-height: 1px;
        border: 1px solid #cccccc;
    }

    .custom_label {
        display: block;
        width: 20%;
        float: left;
        text-align: right;
        font-size: 14px;
        line-height: 40px;
        cursor: default;
    }

    .tools_item {
        width: 40%;
        float: left;
        margin: 10px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .tools_item .el-input {
        width: 80%;
    }
</style>
<script>
    let dom = '';
    import draggable from 'vuedraggable'

    export default {
        data() {
            return {
                tools: []
            }
        },
        components: {
            draggable,
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            addTool() {
                let $this = this;
                let o = {
                    id: $this.tools.length,
                    type: 'input'
                };
                $this.tools.push(o);
            },
            updateDrag() {
                let $this = this;
                console.log($this.tools);
            },
            getdata(evt) {
                console.log(evt.draggedContext.element.id)
            },
            datadragEnd(evt) {
                console.log('拖动前的索引 :' + evt.oldIndex)
                console.log('拖动后的索引 :' + evt.newIndex)
                console.log(this.tags)
            },
            drag(event) {
                dom = event.currentTarget;
            },
            drop(event) {
                event.preventDefault();
                console.log('我是target')
                console.log(event.srcElement.className)
                if (event.srcElement.className != 'select-item') {
                    event.target.appendChild(dom);
                    console.log(dom);
                } else {
                    alert('该位置已被占用');
                }
            },
            allowDrop(event) {
                event.preventDefault(); //preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
            },
            checkMove(evt) {
                console.log(111111111111111111111)
                console.log(evt.draggedContext.element.name)
                alert(1)
                return (evt.draggedContext.element.name !== 'apple');
            }
        }
    };
</script>