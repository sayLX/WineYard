<template>
<div class="container" style="min-width:400px;height:230px"></div>
</template>

<script>
import { defineComponent } from 'vue'
import HighCharts from 'highcharts'
export default defineComponent({
  name: 'caseInfoOpen',
  data () {
    return {
      id:'container',
      options:{
        chart: {
          type: 'bar'                          //指定图表的类型，默认是折线图（line）
        },
        title: {
          text: '我的第一个图表'                 // 标题
        },
        xAxis: {
          categories: ['苹果', '香蕉', '橙子']   // x 轴分类
        },
        yAxis: {
          title: {
            text: '吃水果个数'                // y 轴标题
          }
        },
        series: [{                              // 数据列
          name: '小明',                        // 数据列名
          data: [1, 5, 4]                     // 数据
        }, {
          name: '小红',
          data: [5, 7, 3]
        }]
      }
    }
  },
  mounted() {
    HighCharts.chart(this.id, this.option)
  }
})
</script>

<style lang="scss" scoped>

</style>
