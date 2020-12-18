<template>
    <div class="ctx">
        <div class="body">
            <page-title title="导入统计"></page-title>
            <div class="box">
                <div class="chart-item">
                    <page-title title="已调用接口"></page-title>
                    <div class="form">
                        <a-form
                            layout="inline"
                        >
                        <a-form-item label="时间范围" name="region">
                            <div class="input">
                                <a-date-picker v-model="startTime" style="width: 100%" placeholder="请选择" />
                            </div>
                        </a-form-item>
                        <a-form-item name="region">
                            <div  class="input">
                                <a-date-picker v-model="endTime" style="width: 100%" placeholder="请选择" />
                            </div>
                        </a-form-item>
                        <a-form-item>
                            <a-button type="primary">
                                <template #icon><SearchOutlined /></template>查询
                            </a-button>
                        </a-form-item>
                        </a-form>
                    </div>
                    <div class="mrg">
                        <base-table :col="columnsl" :list="listl" :size="10"></base-table>
                    </div>
                </div>
                <div class="chart-item">
                    <page-title title="发送记录"></page-title>
                    <div class="mrgr">
                        <base-table :col="columnsr" :list="listr" :size="10"></base-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import BaseTable from '@/components/BaseTable.vue'
import TestData from '@/utils/testdata'
export default defineComponent({
  name: '',
  components: {
    PageTitle,
    BaseTable
  },
  setup () {
    const form = reactive({})
    const startTime = ref(null)
    const endTime = ref(null)
    return {
      form,
      startTime,
      endTime,
      columnsl: TestData.LeadingLQuery.columns,
      listl: TestData.LeadingLQuery.dataCol,
      columnsr: TestData.LeadingRQuery.columns,
      listr: TestData.LeadingRQuery.dataCol
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
        position: absolute;
        display: flex;
        flex-direction: column;
        left: 11px;
        right: 11px;
        top: 12px;
        bottom: 12px;
        border: solid 1px #d8d7d7;
        .box {
            flex: 1;
            display: flex;
            justify-content: space-between;
            margin: 10px;
            .chart-item {
                width: 825px;
                border: solid 1px #e2e2e2;
                display: flex;
                flex-direction: column;
                .form {
                    padding: 5px 20px;
                    .input {
                        width: 250px;
                    }
                }
                .mrg {
                    flex: 1;
                    margin: 0 10px;
                }
                .mrgr {
                    flex: 1;
                    margin: 0 10px;
                    margin-top: 3px;
                }
            }
        }
    }
}
</style>
