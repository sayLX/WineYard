<template>
  <div class="container" :id="id" style="min-width:400px;height:230px"></div>
</template>

<script>
import HCharts from 'highcharts'
import highcharts from 'highcharts'
// import VueHighCharts from 'vue-highcharts'

// 引入以上两项之后，因为我们需要使用3d图表，还需要引入：

import highcharts3d from 'highcharts/highcharts-3d'

// 调用3d图表：

highcharts3d(highcharts)
export default{
  name: 'caseInfoOpen',
data () {
      return {
        id:'caseInfoOpen',
        option:{
          chart:{
            type:'column',
          },
          title:{text:''},
          xAxis:{
            categories: ['苹果', '橘子', '梨', '葡萄']},
          yAxis:{title:''},
          plotOptions:{
            pie:{
              allowPointSelect:true,
              cursor:'pointer',
              depth:35,
              innerSize: 80,
              dataLabels:{
                enabled:true,
              }
            }
          },
          legend:{squareSymbol:true,align:'right',verticalAlign: 'top',symbolRadius:0},
          credits: {enabled:false},
          series:[
            {name:'测试1',data: [12,23,19,29]},
            {name:'测试2',data: [12,23,19,29]},
            {name:'测试3',data: [12,23,19,29]},
          ]
        }
      }
    },
    mounted() {
        HCharts.chart(this.id, this.option)
    }
}
</script>

<style lang="scss" scoped>
/* 容器 */
.container{
  width: 100%;
  height: 206px;
  margin: 0 auto;

}
</style>
