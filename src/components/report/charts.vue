<template>
  <div class="el_content">
    <div id="myChart" :style="{width:'100%',height: '500px'}"></div>

    <el-button @click="checkCharts">更改为折线图</el-button>
  </div>
</template>

<script>
  export default {
    name: "charts",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        myChart: ''
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        this.myChart = this.$echarts.init(document.getElementById('myChart'));
        this.myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 100, 10, 20]
          }]
        });
        // myChart.showLoading();
        this.myChart.style = window.innerWidth + 'px';
        window.onresize = this.myChart.resize;
      },
      checkCharts() {
        this.myChart.setOption({
          series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 100, 10, 20]
          }]
        });
      }
    }
  }
</script>

<style scoped>
  canvas {
    width: 100% !important;
  }
</style>
