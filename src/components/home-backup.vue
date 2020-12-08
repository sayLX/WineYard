<template>
  <div class="homepage">
    <div class="shortcuts_wraper">
      <Title title="快捷方式"></Title>
      <shortCut></shortCut>
    </div>

    <div class="wrapper">
      <div class="smsHistory">
        <Title title="短信记录"></Title>
        <!-- <smsHistory :id="id" :option="option"></smsHistory> -->
      </div>
      <div class="caseInfoOpen">
        <Title title="案件信息公开"></Title>
        <caseInfoOpen></caseInfoOpen>
      </div>
    </div>

    <div class="importFile" style="position:relative">
      <Title title="导入文件"></Title>
      <importHistory></importHistory>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Title from './components/Title.vue'
import shortCut from './components/shortCut.vue'
import smsHistory from './components/smsHistory.vue'
import caseInfoOpen from './components/caseInfoOpen.vue'
import importHistory from './components/importHistory.vue'

import highcharts from 'highcharts'
import VueHighCharts from 'vue-highcharts'

// 引入以上两项之后，因为我们需要使用3d图表，还需要引入：

import highcharts3d from 'highcharts/highcharts-3d'

// 调用3d图表：

highcharts3d(highcharts)
export default defineComponent({
  name: 'homePage',
  components: {
    Title,
    shortCut,
    // smsHistory,
    caseInfoOpen,
    importHistory
  },
  data() {
      return {
        id:'test',
        option:{
          chart:{
              type:'pie',
              options3d:{
                  enabled:true,  //是否启用3D功能
                  alpha:45,
                  beta:0,
              }
          },
          title:{
              text:'' //图表的主标题
          },
          // subtitle:{
          //     text:'' //副标题
          // },
          plotOptions:{
              pie:{
                  allowPointSelect:true,  //每个扇形能否被选中
                  cursor:'pointer',  //鼠标指针
                  depth:35,       //饼图的厚度
                  innerSize: 80, //环状图中间圆环的大小
                  dataLabels:{
                    enabled:true,  //是否显示饼图的线型tip
                  }
              }
          },
          credits: {enabled:false},//去掉地址
          series:[
              {
                  type: 'pie',
                  name: '测试用1',//统一的前置词,非必须
                  data: [
                      ['测试1',12],//模块名和所占比，也可以{name: '测试1',y: 12}
                      ['测试2',23],
                      ['测试3',19],
                      ['测试4',29]
                  ]
              }
          ]
    }
  }
  }
})
</script>

<style lang="scss" scoped>
.homepage{
  height: 100%;
  padding: 10px;
  padding-bottom:0;
  background-color: rgb(240,240,240);
  .shortcuts_wraper{
    width: 100%;
  }
  .wrapper{
    overflow: hidden;
    .smsHistory{
      width: calc(55% - 10px);
      height: 250px;
      float: left;
      background-color: #ffffff;
      border: solid 1px #d8d7d7;
      /deep/ .highcharts-container {
        height: 208px !important;
      }
    }
    .caseInfoOpen{
      float: right;
      width: 45%;
      height: 250px;
      background-color: #ffffff;
      border: solid 1px #d8d7d7;
    }
  }
  .importFile{
    clear: both;
    margin-top: 10px;
    height: calc( 100% - 412px);
    background-color: #ffffff;
    border: solid 1px #d8d7d7;
  }
}

</style>
