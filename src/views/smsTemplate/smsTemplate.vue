<template>
<div class="smsTemplate">
  <Title title="短信模板管理"></Title>
  <ul class="template_list" style="list-style:none">
    <div id="moreHistory">
      共{{importHistory_list.length}}条&nbsp;&nbsp;
      <a href="javascript:;" @click="lookAll">{{more}}</a>
    </div>
    <li class="history-title">
      <span>模板类型</span>
      <span>模板名称</span>
      <span>模板内容</span>
      <span>操作</span>
    </li>
    <li class="history_item" v-for="(history,index1) in importHistory_list" :key="index1" v-show="index1<maxLength" >
      <span v-for="(item,index2) in Object.keys(history)"
            :key="index2"
            :class="item">{{history[item]}}
      </span>
      <span class="operate">
        <button id="add_template"><addTemplate></addTemplate></button>
        <button id="delete_template">删除</button>
        <button id="edit_template"><editTemplate></editTemplate></button>
      </span>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from './components/Title.vue'
import editTemplate from './components/editTemplate.vue'
import addTemplate from './components/addTemplate.vue'

export default defineComponent({
  name: 'importHistory',
  components: {
    editTemplate,
    addTemplate,
    Title
  },
  data () {
    return {
      maxLength:13,
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
      if(this.maxLength===13){
        this.maxLength=this.importHistory_list.length
        this.more='收起'
      }
      else{
        this.maxLength=13
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

  .template_list{
    margin: 12px;
    border: 1px solid #dcdfe6;;;
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
      //
      .operate{
        /deep/ button{
          height: 38px;
          width: 40px;
          padding: 0;
          background-color:#fff;
          border: none;
          color: #1890ff;
          box-shadow: none;
          text-shadow: none;
          margin-right: 10px;

          cursor: pointer;
          &:focus{
            outline: none;
          };
          &:hover{
            color: rgb(138, 115, 115);
          }
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
