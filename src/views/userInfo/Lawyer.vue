<template>
  <div class="ctx">
        <div class="body">
            <page-title title="律师信息管理"></page-title>
            <div class="form">
                <a-form
                    layout="inline"
                >
                  <a-form-item label="姓名" name="name">
                      <div class="input">
                        <a-input placeholder="请输入">
                                </a-input>
                      </div>
                  </a-form-item>
                  <a-form-item label="工号" name="region">
                      <div  class="input">
                        <a-input placeholder="请输入">
                                </a-input>
                      </div>
                  </a-form-item>
                  <a-form-item>
                      <a-button type="primary">
                          查询
                      </a-button>
                  </a-form-item>
                </a-form>
            </div>
            <div class="btn-list">
              <a-button class="a-button" @click="showModal">
                <template #icon><PlusOutlined /></template>新增
              </a-button>
              <a-button class="a-button" @click="showDirModal">
                <template #icon><FolderOpenOutlined /></template>文件导入
              </a-button>
            </div>
            <div class="column">
              <base-table :col="columns" :list="list" :size="10"></base-table>
            </div>
        </div>
        <add-lawyer v-model:show="show"></add-lawyer>
        <upload-lawyer v-model:show="dirShow"></upload-lawyer>
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import { FolderOpenOutlined, PlusOutlined } from '@ant-design/icons-vue'
import BaseTable from '@/components/BaseTable.vue'
import TestData from '@/utils/testdata'
import AddLawyer from './components/AddLawyer.vue'
import UploadLawyer from './components/UploadLawyer.vue'
export default defineComponent({
  name: '',
  components: {
    FolderOpenOutlined,
    PageTitle,
    BaseTable,
    PlusOutlined,
    AddLawyer,
    UploadLawyer
  },
  setup () {
    /** 新增 */
    const modalData = reactive({
      show: false // 默认不展示弹窗
    })
    const showModal = () => {
      modalData.show = true
    }

    /** 导入 */
    const modalDirData = reactive({
      dirShow: false
    })
    const showDirModal = () => {
      modalDirData.dirShow = true
    }
    return {
      showModal,
      showDirModal,
      ...toRefs(modalData),
      ...toRefs(modalDirData),
      columns: TestData.LawyerInfo.columns,
      list: TestData.LawyerInfo.dataCol
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
        .form {
          padding: 5px 20px;
          .input {
            width: 250px;
          }
        }
        .column {
            flex: 1;
            margin: 10px 20px;
        }
        .btn-list {
          display: flex;
          padding: 5px 20px;
          .a-button {
            margin-right: 20px;
            background: #ebf4fe;
          }
        }
    }
}
</style>
