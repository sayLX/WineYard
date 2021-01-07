<template>
  <div class="r-top">
    <div class="btn_list">
      <button @click="authorize" :disabled="!!organizationType.jsbm">
        下级单位授权
      </button>
      <button @click="addDeparment" :disabled="!!organizationType.jsbm">
        添加部门
      </button>
      <button @click="deleteDeparment" :disabled="!!organizationType.jsbm">
        删除部门
      </button>
      <button @click="addRole" :disabled="!!organizationType.jsbm">
        添加角色
      </button>
      <add-person
        title="添加角色"
        :tHead="roleThead"
        :personInfo="roleInfo"
        :add="addRole"
      ></add-person>
      <button @click="deleteRole" :disabled="!organizationType.jsbm"  >
        删除角色
      </button>
    </div>
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
      <a-form layout="inline">
        <a-form-item label="姓名" name="name">
          <div class="input">
            <a-input placeholder="请输入"> </a-input>
          </div>
        </a-form-item>
        <a-form-item label="工号" name="region">
          <div class="input">
            <a-input placeholder="请输入"> </a-input>
          </div>
        </a-form-item>
        <a-form-item label="工作证号" name="region">
          <div class="input">
            <a-input placeholder="请输入"> </a-input>
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
import { defineComponent, onMounted } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import BaseTable from '@/components/BaseTable.vue'
import TestData from '@/utils/testdata'
import AddPerson from '@/views/sysConfig/components/addPerson.vue'
import { Api } from '@/api/index'
import { message } from 'ant-design-vue'
export default defineComponent({
  name: '',
  components: {
    SearchOutlined,
    BaseTable,
    AddPerson,
  },
  setup() {
    const roleThead = {
      bmbm: '部门编码',
      dwbm: '单位编码',
      jsmc: '角色名称',
      jsxh: '角色序号',
      spjsbm: '审批角色编码',
      }
    const roleInfo = {
      bmbm: '0001',
      dwbm: '980000',
      jsmc: '角色1',
      jsxh: 1,
      spjsbm: '1',
    }
    const organizationType = { dwbm: '1', bmbm: '2', jsbm: '3' }
    // 删除部门
    const deleteDeparment = () => {
      const mydata: { dwbm: string; bmbm: string } = organizationType
      Api.deleteDeparment(mydata).then((res) => {
        res['success'] && message.success('删除成功')
      })
    }
    // 删除角色
    const deleteRole = () => {
      const mydata = organizationType
      Api.deleteDeparment(mydata).then((res) => {
        res['success'] && message.success('删除成功')
      })
    }
    // 添加角色
    const addRole = (mydata) => {
      return Api.addRole(mydata)
    }
    // 添加部门
    const addDeparment = () => {
      //
    }
    // 授权
    const authorize = () => {
      //
    }
    return {
      columns: TestData.OrgOrg.columns,
      list: TestData.OrgOrg.dataCol,
      organizationType,
      roleThead,
      roleInfo,
      deleteDeparment,
      deleteRole,
      authorize,
      addDeparment,
      addRole,
    }
  },
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
