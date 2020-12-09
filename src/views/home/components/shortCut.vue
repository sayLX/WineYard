<template>
    <ul class="shortcuts">
      <li class="shortcut caseinfoImport" @click="goTo('caseinfoImport')" :style="background">案件公开信息导入</li>
      <li class="shortcut AgentInfoImport" @click="goTo('AgentInfoImport')"  :style="background">辩护代理信息导入</li>
      <li class="shortcut AgentBind" @click="goTo('AgentBind')"  :style="background">辩护代理绑定</li>
      <li class="shortcut localSMS" @click="goTo('localSMS')"  :style="background">本地通知</li>
      <li class="shortcut customSMS" @click="goTo('customSMS')"  :style="background">自定义短信</li>
      <li class="shortcut sendQuery" @click="goTo('sendQuery')"  :style="background">发送记录查询</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'shortCut',
  data () {
    return {
    }
  },
  methods: {
    goTo(url){
      let path='/'+url
      console.log(path)
      this.$router.push(path)
    }
  }
})
</script>

<style lang="scss" scoped>
  .shortcuts{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding:9px;
    background-color: #fff;
    border:1px solid rgb(235,235,235);
    list-style: none;
    .shortcut{
      width: 200px;
      height: 80px;
      border:1px solid rgb(235,235,235);
      background-color: #f8f8fa;
      font-size: 14px;
      text-indent: 80px;
      line-height: 89px;
      cursor: pointer;
    }
    .shortcut:hover{
      background-color: #ebf7ff;
      border: 1px solid #53b2f9;
    }
    .caseinfoImport{
      background: url(~@/assets/img/homepage/01.png) no-repeat left 10px top 10px;
    }
    .AgentInfoImport{
      background: url(~@/assets/img/homepage/02.png) no-repeat left 10px top 10px;
    }
    .AgentBind{
      background: url(~@/assets/img/homepage/03.png) no-repeat left 10px top 10px;
    }
    .localSMS{
      background: url(~@/assets/img/homepage/04.png) no-repeat left 10px top 10px;
    }
    .customSMS{
      background: url(~@/assets/img/homepage/05.png) no-repeat left 10px top 10px;
    }
    .sendQuery{
      background: url(~@/assets/img/homepage/06.png) no-repeat left 10px top 10px;
    }
  }
</style>
