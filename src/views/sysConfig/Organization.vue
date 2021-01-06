<template>
  <div class="ctx">
        <div class="body">
            <page-title title="组织机构"></page-title>
            <el-container class="container">
                <el-aside width="230px" class="left">
                  <org-left @clickleft='clickLeft'></org-left>
                </el-aside>
                <el-main class="right">
                  <org-right></org-right>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
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
    const leftData = reactive({
      bm: '',
      isdw: true
    })
    const clickLeft = (data) => {
      leftData.bm = data.bm
      leftData.isdw = data.isdw
    }

    return {
      clickLeft,
      ...toRefs(leftData)
    }
  }
})
</script>

<style lang='scss' scoped>
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
        .container {
          display: flex;
          width: 100%;
          height: 100%;
          overflow: hidden;
          .left {
            width: 100%;
            height: calc(100% - 14px);
            border: 0.5px solid #e2e2e2;
            margin: 7px;
            margin-right: 0;
            bottom: 7px;
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
