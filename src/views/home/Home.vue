<template>
  <div class="homepage">
    <div class="shortcuts_wraper">
      <Title title="快捷方式"></Title>
      <shortCut></shortCut>
    </div>

    <div class="wrapper">
      <div class="smsHistory">
        <Title title="短信记录"></Title>
        <smsHistory></smsHistory>
      </div>
      <div class="caseInfoOpen">
        <Title title="案件信息公开"></Title>
        <caseInfoOpen></caseInfoOpen>
      </div>
    </div>

    <div class="importFile" style="position: relative">
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
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(highcharts)
export default defineComponent({
  name: 'homePage',
  components: {
    Title,
    shortCut,
    smsHistory,
    caseInfoOpen,
    importHistory,
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.homepage {
  height: 100%;
  padding: 10px;
  padding-bottom: 0;
  background-color: rgb(240, 240, 240);
  .shortcuts_wraper {
    width: 100%;
  }
  .wrapper {
    // 短信记录模块
    .smsHistory {
      width: calc(55% - 10px);
      height: 250px;
      float: left;
      background-color: #ffffff;
      border: solid 1px #d8d7d7;
    }

    // 案件信息公开模块
    .caseInfoOpen {
      float: right;
      width: 45%;
      height: 250px;
      background-color: #ffffff;
      border: solid 1px #d8d7d7;
    }
  }

  // 导入文件模块
  .importFile {
    clear: both;
    margin-top: 10px;
    height: calc(100% - 412px);
    background-color: #ffffff;
    border: solid 1px #d8d7d7;
  }
}
</style>
