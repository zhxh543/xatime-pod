<template>
  <div class="el_content">
    <div id="myChart" :style="{width:'500px',height:'500px'}"></div>

    <el-button @click="changeType('line')">更改为折线图</el-button>
    <el-button @click="changeType('pie')">更改为饼图</el-button>
    <el-button @click="changeType('bar')">更改为柱状图</el-button>
  </div>
</template>

<script>
  export default {
    name: "charts",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        myChart: '',
        option: {
          title: {
            show: true,
            text: "多系列柱图",
            textStyle: {
              color: "rgb(68, 68, 68)",
              fontStyle: "normal",
              fontWeight: "bold",
              fontFamily: "Microsoft YaHei",
              fontSize: 16
            },
            left: "left"
          },
          contextmenu: {
            drillthrough: {
              show: true
            }
          },
          tooltip: {
            show: true,
            customizeTip: "",
            trigger: "axis",
            formatter: "",
            backgroundColor: "#aaa",
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: "#ccc",
                opacity: 0.3
              }
            },
            textStyle: {
              color: "rgb(255, 255, 255)",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "Microsoft YaHei",
              fontSize: 12
            }
          },
          legend: {
            itemWidth: 25,
            itemHeight: 14,
            itemGap: 10,
            show: true,
            left: "center",
            top: "top",
            orient: "horizontal",
            textStyle: {
              color: "rgb(68, 68, 68)",
              fontStyle: "normal",
              fontWeight: "normal",
              fontFamily: "Microsoft YaHei",
              fontSize: 12
            },
            multiColor: true
          },
          grid: {
            left: 20,
            top: 50,
            right: 20,
            bottom: 30,
            containLabel: true
          },
          xAxis: [
            {
              position: "bottom",
              type: "category",
              name: " ",
              nameLocation: "middle",
              nameTextStyle: {
                color: "rgb(68, 68, 68)",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "Microsoft YaHei",
                fontSize: 12
              },
              nameGap: 30,
              boundaryGap: true,
              axisLine: {
                lineStyle: {
                  color: "#0a5670",
                  width: 1,
                  type: "solid"
                }
              },
              axisTick: {
                lineStyle: {
                  color: "#0a5670",
                  width: 1,
                  type: "solid"
                }
              },
              axisLabel: {
                interval: "auto",
                rotate: 0,
                formatter: null,
                textStyle: {
                  color: "rgb(68, 68, 68)",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontFamily: "Microsoft YaHei",
                  fontSize: 12
                }
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: "#0a5670",
                  width: 1,
                  type: "solid",
                  opacity: 0.7
                }
              }
            }
          ],
          yAxis: [
            {
              position: "left",
              type: "value",
              name: " ",
              nameLocation: "end",
              nameTextStyle: {
                color: "rgb(68, 68, 68)",
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: "Microsoft YaHei",
                fontSize: 12
              },
              nameGap: 15,
              min: null,
              max: null,
              axisLine: {
                lineStyle: {
                  color: "#0a5670",
                  width: 1,
                  type: "solid"
                }
              },
              axisTick: {
                lineStyle: {
                  color: "#0a5670",
                  width: 1,
                  type: "solid"
                }
              },
              axisLabel: {
                formatter: "{value}",
                textStyle: {
                  color: "rgb(68, 68, 68)",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontFamily: "Microsoft YaHei",
                  fontSize: 12
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#0a5670",
                  width: 1,
                  type: "solid",
                  opacity: 0.7
                }
              }
            }
          ],
          series: [
            {
              type: "bar",
              name: "",
              barGap: "20%",
              barCategoryGap: "30%",
              label: {
                normal: {
                  show: false,
                  position: "top",
                  formatter: "{c}",
                  textStyle: {
                    color: "rgb(68, 68, 68)",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "Microsoft YaHei",
                    fontSize: 12
                  }
                }
              }
            }
          ]
        },
        ser: [],
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1],
            ['Brownie', 66.4, 35.9, 80.1]
          ]
        },
        type: ''
      }
    },
    mounted() {
      this.drawLine();
    }
    ,
    methods: {
      drawLine() {
        document.getElementById('myChart').style.width = window.innerWidth - 267 + 'px';
        this.myChart = this.$echarts.init(document.getElementById('myChart'));
        this.myChart.setOption(this.option);
        this.changeType('bar');
        window.onresize = this.myChart.resize;
      },
      changeType(type) {
        this.ser = [];
        this.type = {type: type};
        for (let i = 0; i < this.dataset.source[0].length - 1; i++) {
          this.ser.push(this.type);
        }
        this.myChart.setOption({
          dataset: this.dataset,
          series: this.ser
        });
      }
    }
  }
</script>

<style>
</style>
