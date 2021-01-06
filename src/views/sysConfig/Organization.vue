<template>
  <div class="ctx">
        <div class="body">
            <page-title title="组织机构"></page-title>
            <el-container class="container">
                <el-aside width="230px" class="left">
                  <org-left></org-left>
                </el-aside>
                <el-main class="right">
                  <org-right></org-right>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import TestData from '@/utils/testdata'
import OrgRight from './components/OrgRight.vue'
import OrgLeft from './components/OrgLeft.vue';
export default defineComponent({
  name: '',
  components: {
    PageTitle,
    OrgRight,
    OrgLeft
  },
  setup () {
    return {
      columns: TestData.OrgOrg.columns,
      list: TestData.OrgOrg.dataCol
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
            width: 100%;
          }
          .right {
            margin: 7px;
            border: 0.5px solid #e2e2e2;
            padding: 0;
            display: flex;
            flex-direction: column;
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
