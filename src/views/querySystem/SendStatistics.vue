<template>
    <div class="ctx">
        <div class="body">
            <page-title title="发送记录统计"></page-title>
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
            <div class="chart">
              <div class="chart-item">
                <page-title title="短信记录"></page-title>
              </div>
              <div class="chart-item">
                <page-title title="案件信息公开"></page-title>
              </div>
            </div>
            <div class="table">
              <page-title title="短信发送记录"></page-title>
              <div class="table-ctx">
                <statistics-table></statistics-table>
              </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import StatisticsTable from './components/StatisticsTable.vue'
export default defineComponent({
  name: '',
  components: {
    PageTitle,
    SearchOutlined,
    StatisticsTable
  },
  setup () {
    const labelCol = { span: 6 }
    const wrapperCol = { span: 12 }
    return {
      labelCol,
      wrapperCol
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
        left: 11px;
        right: 11px;
        top: 12px;
        bottom: 12px;
        border: solid 1px #d8d7d7;
        display: flex;
        flex-direction: column;
        .form {
          padding: 5px 20px;
          .input {
            width: 250px;
          }
        }
        .chart {
          display: flex;
          justify-content: space-between;
          margin: 10px;
          .chart-item {
            width: 825px;
            height: 365px;
            border: solid 1px #e2e2e2;
          }
        }
        .table {
          flex: 1;
          margin: 0 10px;
          margin-bottom: 10px;
          border: solid 1px #e2e2e2;
          .table-ctx {
            padding: 0 10px;
          }
        }
    }
}
</style>
