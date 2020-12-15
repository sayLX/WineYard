<template>
    <div class="ctx">
        <div class="body">
            <Title title="辩护代理绑定"></Title>
            <ul class="searchBind">
              <li>
                <span>部门受案号</span>
                <input type="text" v-model="searchConditions.bmsah" placeholder="请输入">
              </li>
              <li>
                <span>案件名称</span>
                <input type="text" v-model="searchConditions.ajmc" placeholder="请输入">
              </li>
              <li>
                <span>人员姓名</span>
                <input type="text" v-model="searchConditions.ryxm" placeholder="请输入">
              </li>
              <li>
                <span>案件类型</span>
                <input type="text" v-model="searchConditions.ajlx" placeholder="请输入">
              </li>
              <li>
                <span>是否绑定</span>
                <select class="search" v-model="searchConditions.sfbd">
                  <option disabled>请选择</option>
                  <option >已绑定</option>
                  <option > 未绑定</option>
                </select>
                <button id="search">
                  <i class="fa fa-search"></i>查询
                </button>
              </li>
            </ul>
            <bind-result></bind-result>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from './components/Title.vue'
import bindResult from './components/bindResult.vue'
import '@/assets/font/css/all.css'
const searchConditions= new Object
export default defineComponent({
  name: 'AgentBind',
  components: {
    Title,
    bindResult,
  },
  data () {
    return {
      searchConditions:{
      bmsah:'',
      ajmc:'',
      ryxm:'',
      ajlx:'',
      sfbd:''
      },
      conditionsLength:Object.keys(searchConditions).length,
    }
  }
})
</script>
<style lang="scss" scoped>
.ctx {
  width: 100%;
  height: 100%;
  position: relative;
  .body {
    min-width:1080px ;
    position: absolute;
    left: 11px;
    right: 11px;
    top: 12px;
    bottom: 12px;
    border: solid 1px #d8d7d7;
    .form {
      padding: 10px 20px;
    }
    &>*:not(.title){
      margin-left: 10px;
    }
    // 查询条件
    .searchBind{
      width: 100%;
      list-style: none;
      overflow: hidden;
      li{
        float: left;
        margin-bottom: 12px;
        &:nth-child(3n){
          margin-right: 0;
        };
        margin-right: 100px;

        span{
          width: 94px;
          padding: 0 12px;
          font-size: 12px;
          line-height: 34px;
          color: #666666;
          display: inline-block;
          text-align: right;
        }
        input,select{
          width: 250px;
          height: 34px;
          text-indent: 13px;
          background-color: #ffffff;
          border-radius: 3px;
          border: solid 1px #dcdfe6;
        }
        #search{
          width: 96px;
          height: 34px;
          border: 1px solid #dcdfe6;
          background-color: #1b9cff;
          border-radius: 3px;
          margin-left: 10px;
          i{
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>
