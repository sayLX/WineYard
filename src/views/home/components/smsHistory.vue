<template>
  <div class="container" :id="id" :option="option"></div>
</template>

<script>
import HCharts from 'highcharts'
export default {
  name: 'smsHistory',
  data() {
    return {
      id: 'smsHistory',
      option: {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true, //是否启用3D功能
            alpha: 45,
            beta: 0,
          },
        },
        title: { text: '' },
        plotOptions: {
          pie: {
            allowPointSelect: true, //每个扇形能否被选中
            cursor: 'pointer', //鼠标指针
            depth: 35, //饼图的厚度
            innerSize: 80, //环状图中间圆环的大小
            dataLabels: {
              enabled: true, //是否显示饼图的线型tip
            },
          },
        },
        credits: { enabled: false }, //去掉地址
        series: [
          {
            type: 'pie',
            name: '测试用1', //统一的前置词,非必须
            data: [
              ['测试1', 12], //模块名和所占比，也可以{name: '测试1',y: 12}
              ['测试2', 23],
              ['测试3', 19],
              ['测试4', 29],
            ],
          },
        ],
      },
    }
  },
  mounted() {
    HCharts.chart(this.id, this.option)
  },
}
</script>

<style scoped>
/* 容器 */
.container {
  width: 100%;
  height: 206px;
  margin: 0 auto;
}
</style>
