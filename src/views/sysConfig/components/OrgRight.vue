<template>
  <div class="r-top">
    <div class="title">
      <span class="text">单位机构</span>
    </div>
    <div class="info">
      <div class="item"><span>单位名称: </span>高检院</div>
      <div class="item"><span>单位简称: </span>高检院</div>
      <div class="item"><span>单位级别: </span>1</div>
    </div>
  </div>
  <div class="r-bottom">
    <div class="title">
      <span class="text">人员信息</span>
    </div>
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
          <a-form-item label="工作证号" name="region">
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
      <base-table :col="columns" :list="list" :size="7"></base-table>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import BaseTable from '@/components/BaseTable.vue'
import TestData from '@/utils/testdata'
export default defineComponent({
  name: '',
  components: {
    SearchOutlined,
    BaseTable
  },
  setup () {
    return {
      columns: TestData.OrgOrg.columns,
      list: TestData.OrgOrg.dataCol
    }
  }
})
</script>

<style lang='scss' scoped>
.r-top {
  height: 30%;
  border: 0.5px solid#e2e2e2;
  margin: 5px;
  .info {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    .item {
      width: 300px;
      span {
        color: #aaa;
      }
    }
  }
}
.r-bottom {
  border: 0.5px solid #e2e2e2;
  flex: 1;
  margin: 5px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  .form {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    .input {
      width: 250px;
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
</style>
