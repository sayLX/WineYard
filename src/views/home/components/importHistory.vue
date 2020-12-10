<template>
  <ul class="importHistory" style="list-style:none">
    <div id="moreHistory">
      共{{importHistory_list.length}}条&nbsp;&nbsp;
      <a href="javascript:;" @click="lookAll">{{more}}</a>
    </div>
    <li class="history-title">
      <span>导入类型</span>
      <span>导入时间</span>
      <span>导入文件</span>
      <span>操作</span>
    </li>
    <li class="history_item" v-for="(history,index1) in importHistory_list" :key="index1" v-show="index1<maxLength" >
      <span v-for="(item,index2) in Object.keys(history)"
            :key="index2"
            :class="item">{{history[item]}}
      </span>
      <span id="detailBtn"><importHistoryDetail></importHistoryDetail></span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import importHistoryDetail from './importHistoryDetail.vue'



export default defineComponent({
  name: 'importHistory',
  components: {
    importHistoryDetail,
  },
  data () {
    return {
      maxLength:3,
      more:"更多",
      importHistory_list:[
        {'type':'案件公开信息导入','time':'2020-10-10','file':'案件公开信息导入测试1.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
        {'type':'案件公开信息导入','time':'2020-10-11','file':'案件公开信息导入测试2.zip'},
      ]
    }
  },
  methods: {
    lookAll(){
      if(this.maxLength===3){
        this.maxLength=this.importHistory_list.length
        this.more='收起'
      }
      else{
        this.maxLength=3
        this.more='更多'
      }
    }
  }
})
</script>

<style lang="scss" scoped>
    #moreHistory{
      position: absolute;
      right: 20px;
      top: 6px;
    }
  .importHistory{
    height: calc(100% - 35px);
    padding: 0 12px 15px 12px;
    overflow: auto;
    // 表头
    .history-title{
      border-top: solid 1px #d8d7d7;
      margin-top: 10px;
      font-weight: bold;
    }
    // 每行历史记录
    li{
      height: 40px;
      font-size: 14px;
      line-height: 40px;
      border-bottom: solid 1px #d8d7d7;
      padding-left: 19px;
      display: flex;
      justify-content: space-between;
      span{
        width: 200px;
        text-align: left;
      }
      // 详情按钮
      #detailBtn{
      /deep/  button{
          background-color:#fff;
          border: none;
          color: #1890ff;
          box-shadow: none;
          text-shadow: none;
          padding-left: 0;
        }
      }
    }
    // 偶数行的样式
    li:nth-child(even){
      background-color: rgb(248,248,250);
        /deep/  button{
          background-color: rgb(248,248,250) !important;
        }
    }
  }
</style>
