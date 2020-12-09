<template>
  <div class="ctx">
        <div class="body">
            <page-title title="数据字典"></page-title>
            <el-container class="container">
                <el-aside width="260px" class="left">
                  <div class="title">
                    <span class="text">分类代码类别</span>
                  </div>
                  <div class="btn-list">
                    <el-button type="primary" size='mini' icon="el-icon-refresh-left">刷新</el-button>
                    <el-button type="primary" size='mini' icon="el-icon-plus">新增</el-button>
                    <el-button type="primary" size='mini' icon="el-icon-edit-outline">编辑</el-button>
                    <el-button @click="ldelete" type="primary" size='mini' icon="el-icon-delete">删除</el-button>
                  </div>
                  <el-table
                    :data="tableData"
                    style="width: 100%"
                    size='mini'
                    class="customer-no-border-table">
                    <el-table-column
                      type="selection"
                      v-if="deleteFlag"
                      width="55">
                    </el-table-column>
                    <el-table-column
                      prop="data"
                      label="公共"
                    >
                    </el-table-column>
                  </el-table>
                </el-aside>
                <el-main class="right">
                  <div class="title">
                    <span class="text">分类代码</span>
                  </div>
                  <div class="btn-list">
                    <el-button type="primary" size='mini' icon="el-icon-plus">新增分类</el-button>
                    <el-button type="primary" size='mini' icon="el-icon-plus">新增子分类</el-button>
                    <el-button type="primary" size='mini' icon="el-icon-edit-outline">编辑</el-button>
                    <el-button type="primary" size='mini' icon="el-icon-delete">删除</el-button>
                  </div>
                  <div class="table">
                    <dictionary-table></dictionary-table>
                  </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import DictionaryTable from './components/DictionaryTable.vue'
export default defineComponent({
  name: '',
  components: {
    PageTitle,
    DictionaryTable
  },
  setup () {
    const leftList = reactive({
      tableData: [{
        data: 'xxxxxxxxxxx'
      }, {
        data: 'xxxxxxxxxxx'
      }, {
        data: 'xxxxxxxxxxx'
      }]
    })
    const flag = reactive({
      deleteFlag: false
    })
    const ldelete = () => {
      flag.deleteFlag = !flag.deleteFlag
      console.log(flag.deleteFlag)
    }
    return {
      ...toRefs(leftList),
      ...toRefs(flag),
      ldelete
    }
  }
})
</script>

<style lang='scss'>
.ctx {
    width: 100%;
    height: 100%;
    position: relative;
    .body {
        position: absolute;
        left: 11px;
        right: 11px;
        top: 12px;
        bottom: 12px;
        border: solid 1px #d8d7d7;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .container {
          display: flex;
          height: 100%;
          .left {
            border: 0.5px solid #e2e2e2;
            margin: 7px;
            margin-right: 0;
            .btn-list {
              display: flex;
              justify-content: space-between;
              padding: 7px;
              border-bottom: 0.5px solid #e2e2e2;
              .el-button {
                padding: 5px;
                background-color: #ebf4fe;
                border-radius: 3px;
                border: solid 1px #a9c4df;
                font-family: MicrosoftYaHei;
                font-size: 12px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #5c79b0;
              }
            }
            .customer-no-border-table th{
                border:none;
              }
            .customer-no-border-table td,.customer-no-border-table th.is-leaf {
              border:none;
            }
            /*表格最外层边框-底部边框*/
            .customer-no-border-table .el-table--border::after,.customer-no-border-table .el-table--group::after{
                width: 0;
              }
            .customer-no-border-table::before{
              width: 0;
            }
            .customer-no-border-table .el-table__fixed-right::before,.el-table__fixed::before{
              width: 0;
            }
            .customer-no-border-table .el-table__header tr th{
              background: #fff;
              color: #333333 ;
              padding: 3px ;
              font-weight: 550 ;
              height: 36px ;
              border: 0px;
              font-size: 15px;
            }
          }
          .right {
            margin: 7px;
            border: 0.5px solid #e2e2e2;
            padding: 0;
            display: flex;
            flex-direction: column;
            .btn-list {
              display: flex;
              justify-content: space-between;
              padding: 7px;
              width: 300px;
              .el-button {
                padding: 5px;
                background-color: #ebf4fe;
                border-radius: 3px;
                border: solid 1px #a9c4df;
                font-family: MicrosoftYaHei;
                font-size: 12px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #5c79b0;
              }
            }
            .table {
              flex: 1;
              padding: 10px;
            }
          }
          .title {
            height: 30px;
            font-size: 12px;
            padding: 0 5px;
            line-height: 30px;
            border-bottom: 0.5px solid #e2e2e2;
            .text {
              padding: 5px 5px;
              border-bottom: 2px solid #28a2fd;
            }
          }
        }
    }
}
</style>
