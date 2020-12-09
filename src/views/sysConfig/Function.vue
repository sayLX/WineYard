<template>
  <div class="ctx">
        <div class="body">
            <page-title title="功能管理"></page-title>
            <div class="form">
                <a-form
                    layout="inline"
                >
                  <a-form-item label="功能名称" name="name">
                      <div class="input">
                        <a-input placeholder="请输入">
                                </a-input>
                      </div>
                  </a-form-item>
                  <a-form-item label="所属类别" name="region">
                      <div  class="input">
                        <a-input placeholder="请输入">
                                </a-input>
                      </div>
                  </a-form-item>
                  <a-form-item>
                      <a-button type="primary">
                          <template #icon><SearchOutlined /></template>查询
                      </a-button>
                  </a-form-item>
                </a-form>
            </div>
            <div class="table">
              <fun-table></fun-table>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import FunTable from './components/FunTable.vue'
export default defineComponent({
  name: '',
  components: {
    PageTitle,
    SearchOutlined,
    FunTable
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
        .table {
          padding: 5px;
        }
    }
}
</style>
