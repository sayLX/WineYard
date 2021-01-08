<template>
  <div class="r-top">
    <div class="btn_list">
      <!-- 添加部门 -->
      <add-person
        title="添加部门"
        :tHead="deptThead"
        :personInfo="deptInfo"
        :add="addDeparment"
        :disabled="!!organizationType.jsbm || !!organizationType.jsbm"
      ></add-person>
      <!-- 删除部门 -->
      <a-button
        type="primary"
        @click="deleteDeparment"
        :disabled="!organizationType.bmbm || !!organizationType.jsbm"
      >
        <template #icon><DeleteOutlined /></template>
        删除部门
      </a-button>
      <!-- 添加角色 -->
      <add-person
        title="添加角色"
        :tHead="deptThead"
        :personInfo="deptInfo"
        :add="addDeparment"
        :disabled="!organizationType.bmbm || !!organizationType.jsbm"
      ></add-person>
      <!-- 删除角色 -->
      <a-button
        type="primary"
        @click="deleteRole"
        :disabled="!organizationType.jsbm"
      >
        <template #icon><DeleteOutlined /></template>
        删除角色
      </a-button>
    </div>
    <div class="title">
      <span class="text">单位机构</span>
    </div>
    <div class="info">
      <div class="item">
        <span>{{ key1 }}: </span>
        <input type="text" :value="value1" disabled />
      </div>
      <div class="item">
        <span>{{ key2 }}: </span>
        <input type="text" :value="value2" disabled />
      </div>
      <div class="item">
        <span>{{ key3 }}: </span>
        <input type="text" :value="value3" disabled />
      </div>
      <div
        class="edit"
        style="display: none"
        :class="{ isDisplay: !!organizationType.jsbm }"
      >
        <add-person
          title="编辑角色"
          :tHead="roleThead"
          :personInfo="roleInfo"
          :add="editRole"
        ></add-person>
        <add-person
          title="编辑权限"
          :tHead="rightThead"
          :personInfo="rightInfo"
          :add="editRight"
        ></add-person>
      </div>
    </div>
  </div>
  <div class="r-bottom">
    <div class="title">
      <span class="text">人员信息</span>
    </div>
    <div class="form">
      <a-form layout="inline">
        <a-form-item label="姓名">
          <div class="input">
            <a-input placeholder="请输入" v-model:value="mc"> </a-input>
          </div>
        </a-form-item>
        <a-form-item label="工作证号">
          <div class="input">
            <a-input placeholder="请输入" v-model:value="gzzh"> </a-input>
          </div>
        </a-form-item>
        <a-form-item label="在职单位编码">
          <div class="input">
            <a-input placeholder="请输入" v-model:value="zzdwbm"> </a-input>
          </div>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="queryPerson">
            <template #icon><SearchOutlined /></template>查询
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="person-list">
      <!-- <base-table :col="columns" :list="list" :size="7"></base-table> -->
      <!-- 表头 -->
      <a-row class="list-head list-item" style="font-weight: bold">
        <a-col
          :span="item.span"
          v-for="(item, index) in itemName"
          :key="index"
          :class="item.key"
          >{{ item.value }}
        </a-col>
        <a-col span="3">操作</a-col>
      </a-row>
      <!-- 列表项 -->
      <a-row
        class="list-item"
        v-for="(item1, index1) in personList"
        :key="index1"
      >
        <a-col
          :span="item2.span"
          v-for="(item2, index2) in itemName"
          :key="index2"
          :class="item2.key"
          >{{ item1[item2.key] }}
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  watch,
} from 'vue'
import {
  SearchOutlined,
  DeleteOutlined,
  ClusterOutlined,
} from '@ant-design/icons-vue'
// import BaseTable from '@/components/BaseTable.vue'
import TestData from '@/utils/testdata'
import AddPerson from '@/views/sysConfig/components/addPerson.vue'
// import EditPersonInfo from '@/views/sysConfig/components/editPersonInfo.vue'
import { Api } from '@/api/index'
import { message } from 'ant-design-vue'
export default defineComponent({
  name: '',
  components: {
    SearchOutlined,
    DeleteOutlined,
    ClusterOutlined,
    AddPerson,
    // EditPersonInfo,
  },
  props: {
    organizationType: {
      type: Object,
    },
  },
  setup(props) {
    // 信息展示框数据
    const organizationInfo = reactive({
      key1: '',
      value1: '',
      key2: '',
      value2: '',
      key3: '',
      value3: '',
    })
    // 获取单位信息
    const getOrganizationInfo = () => {
      Api.getDwInfo().then((res) => {
        if (res['success']) {
          organizationInfo.value1 = res.data['dwmc']
          organizationInfo.value2 = res.data['dwjc']
          organizationInfo.value3 = res.data['dwjb']
          organizationInfo.key1 = '单位名称'
          organizationInfo.key2 = '单位简称'
          organizationInfo.key3 = '单位级别'
        }
      })
    }
    // 获取部门信息
    const getDeptInfo = (mydata) => {
      return Api.getDepartmentInfo(mydata)
    }
    // 获取角色信息
    const getRoleInfo = (mydata) => {
      return Api.getRoleInfo(mydata)
    }
    const Type = computed(() => {
      return props.organizationType
    })
    // 显示点击对象信息
    let mytype = { bmbm: '', dwbm: '', jsbm: '' }

    watch(props.organizationType, () => {
      console.log('开始监听了')
      // 显示点击对象信息
      const mytype = props.organizationType
      if (!!props.organizationType.jsbm) {
        getRoleInfo(mytype).then((res) => {
          organizationInfo.value1 = res.data['jsmc']
          organizationInfo.value2 = res.data['jsxh']
          organizationInfo.value3 = res.data['fbmbm']
          organizationInfo.key1 = '角色名称'
          organizationInfo.key2 = '角色序号'
          organizationInfo.key3 = '所属部门'
        })
      } else if (!!props.organizationType.bmbm) {
        getDeptInfo({
          bmbm: mytype.bmbm,
          dwbm: mytype.dwbm,
        }).then((res) => {
          organizationInfo.value1 = res.data['bmmc']
          organizationInfo.value2 = res.data['bmbm']
          organizationInfo.value3 = res.data['fbmbm']
          organizationInfo.key1 = '部门名称'
          organizationInfo.key2 = '部门编码'
          organizationInfo.key3 = '父部门编码'
        })
      }
    })

    const personData = reactive({
      personList: [],
    })

    // 获取人员列表
    const itemName = [
      { key: 'xh', value: '序号', span: '2' },
      { key: 'mc', value: '姓名', span: '2' },
      { key: 'dlbm', value: '登录别名', span: '3' },
      { key: 'gzzh', value: '工作证号', span: '4' },
      { key: 'zzdwmc', value: '电话号码', span: '4' },
      { key: 'dzyj', value: '电子邮件', span: '4' },
    ]
    const currentPage = { mc: '', pageSize: 10, pageIndex: 1 }
    const getPersonList = () => {
      const mydata = Object.assign({}, mytype, currentPage)
      Api.getPersonRoleList(mydata).then((res) => {
        if (res['success']) {
          personData.personList = res.data.entities
        }
      })
    }

    // 输入框查询人员
    const getOrganizationData = reactive({
      curent: 1,
      gzzh: '',
      mc: '',
      size: 10,
      zzdwbm: '',
    })
    // 获取人员列表，并将性别"1""0"分别转化成"男"""女"
    const queryPerson = () => {
      const mydata = getOrganizationData
      Api.getOrganization(mydata).then((res) => {
        personData.personList = res.data.entities.map((item) => {
          if (item.xb == '0') item.xb = '女'
          else item.xb = '男'
          return item
        })
      })
    }
    // 预加载本单位所有人员及单位信息
    onMounted(() => {
      queryPerson()
      getOrganizationInfo()
    })
    // 添加角色信息
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
    // 添加部门信息
    const deptThead = {
      bmmc: '部门名称',
      bmxh: '部门序号',
      bz: '备注',
      dwbm: '单位编码',
      fbmbm: '父部门编码',
    }
    // 部门信息
    const deptInfo = {
      bmmc: '第一检察部',
      bmxh: 1,
      bz: 'wu',
      dwbm: '980000',
      fbmbm: '770',
    }
    // 删除部门
    const deleteDeparment = () => {
      const mydata: { dwbm: string; bmbm: string } = Type.value
      Api.deleteDeparment(mydata).then((res) => {
        res['success'] && message.success('删除成功')
      })
    }
    // 删除角色
    const deleteRole = () => {
      const mydata: { dwbm: string; bmbm: string; jsbm: string } = Type.value
      Api.deleteRole(mydata).then((res) => {
        res['success'] && message.success('删除成功')
      })
    }
    // 添加角色
    const addRole = (mydata) => {
      return Api.addRole(mydata)
    }
    // 添加部门
    const addDeparment = (mydata) => {
      return Api.addDeparment(mydata)
    }
    // 编辑部门
    const editDeparment = (mydata) => {
      return Api.addDeparment(mydata)
    }
    const rightThead = {
      bmbm: '部门编码',
      dwbm: '单位编码',
      gnbm: '功能编码',
      jsbm: '角色编码',
    }
    const rightInfo = {
      bmbm: '1234',
      dwbm: '123456',
      gnbm: '1111111111',
      jsbm: '123',
    }
    // 查询权限
    const queryRight = () => {
      let result={}
      Api.queryRight(mytype).then((res) => {
        console.log('权限数据')
        console.log(res.data)
        result=res.data
      })
      return result
    }
    // 编辑权限
    const editRight = () => {
      // if(!!queryRight()){
      //    rightInfo = queryRight()
      // }
      console.log('查询数据')
      console.log(rightInfo)
      return Api.editRight(rightInfo)
    }
    // 授权
    const authorize = () => {
      //
    }
    // 编辑角色
    const editRole = () => {
      return Api.editRole(Object.assign({},roleInfo,{jsbm:"12345"}))
    }

    return {
      columns: TestData.OrgOrg.columns,
      list: TestData.OrgOrg.dataCol,
      // organizationType,
      Type,
      mytype,
      roleThead,
      roleInfo,
      deptThead,
      deptInfo,
      itemName,
      rightThead,
      rightInfo,
      ...toRefs(personData),
      ...toRefs(getOrganizationData),
      ...toRefs(organizationInfo),

      currentPage,
      getPersonList,
      getOrganizationInfo,
      getDeptInfo,
      queryPerson,
      deleteDeparment,
      deleteRole,
      editRole,
      authorize,
      addDeparment,
      editDeparment,
      addRole,
      editRight,
      queryRight,
    }
  },
})
</script>

<style lang='scss' scoped>
.r-top {
  height: 30%;
  border: 0.5px solid#e2e2e2;
  margin: 5px;
  .btn_list {
    padding: 5px 0;
    border-bottom: 0.5px solid #e2e2e2;
    button {
      margin: 0 10px;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    .isDisplay {
      display: flex !important;
    }
    .item {
      width: 30%;
      span {
        color: #aaa;
      }
      input {
        width: calc(100% - 100px);
        height: 30px;
        border: 0.5px solid #e2e2e2;
        text-indent: 10px;
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
  .person-list {
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
$border: 1px solid #d8d7d7;
.person-list {
  padding: 10px;
  padding-top: 0;
  .list-item {
    height: 40px;
    line-height: 40px;
    text-indent: 10px;
    border-bottom: $border;
    &:nth-child(even) {
      background-color: rgb(250, 250, 250);
    }
  }
}
</style>
