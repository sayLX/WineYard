<template>
    <div class="ctx">
        <div class="body">
            <page-title title="发送记录查询"></page-title>
            <div class="form">
                <a-form
                :model="form"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                layout="horizontal"
                >
                    <a-row>
                        <a-col :span="8">
                            <a-form-item label="短信模板类型" name="region">
                                <a-select placeholder="请选择">
                                    <a-select-option value="shanghai">
                                    Zone one
                                    </a-select-option>
                                    <a-select-option value="beijing">
                                    Zone two
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="短信模板名称" name="region">
                                <a-select placeholder="请选择">
                                    <a-select-option value="shanghai">
                                    Zone one
                                    </a-select-option>
                                    <a-select-option value="beijing">
                                    Zone two
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col><a-col :span="8">
                            <a-form-item label="发送人姓名" name="region">
                                <a-input placeholder="请输入">
                                </a-input>
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="8">
                            <a-form-item label="接收人姓名" name="region">
                                <a-input placeholder="请输入">
                                </a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="发送开始时间" name="region">
                                <a-date-picker v-model="startTime" style="width: 100%" placeholder="请选择" />
                            </a-form-item>
                        </a-col><a-col :span="8">
                            <a-form-item label="发送结束时间" name="region">
                                <a-date-picker v-model="endTime" style="width: 100%" placeholder="请选择" />
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="8">
                            <a-form-item label="短信结果" name="region">
                                <a-select placeholder="请选择">
                                    <a-select-option value="shanghai">
                                    Zone one
                                    </a-select-option>
                                    <a-select-option value="beijing">
                                    Zone two
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span='8'>
                            <a-form-item>
                                <a-button type="primary">
                                    <template #icon><SearchOutlined /></template>查询
                                </a-button>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-form>
            </div>
            <div class="column">
                <send-table></send-table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import SendTable from './components/SendTable.vue'
export default defineComponent({
  name: '',
  components: {
    PageTitle,
    SearchOutlined,
    SendTable
  },
  setup () {
    const form = reactive({})
    const rules = reactive({})
    const labelCol = { span: 6 }
    const wrapperCol = { span: 12 }
    const startTime = ref(null)
    const endTime = ref(null)
    return {
      form,
      rules,
      labelCol,
      wrapperCol,
      startTime,
      endTime
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
        overflow: hidden;
        .form {
            margin: 10px 20px;
            border-bottom: 1px solid #a9c4df;
        }
        .column {
            flex: 1;
            margin: 10px 20px;
        }
    }
}
</style>
