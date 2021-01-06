<template>
  <div class="ctx">
    <div class="body">
      <page-title title="用户管理"></page-title>
      <div class="form">
        <a-form layout="inline">
          <a-form-item label="姓名" name="name">
            <div class="input">
              <a-input v-model="getOrganizationData.mc" placeholder="请输入">
              </a-input>
            </div>
          </a-form-item>
          <a-form-item label="工作证号" name="region">
            <div class="input">
              <a-input v-model="getOrganizationData.gzzh" placeholder="请输入">
              </a-input>
            </div>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="getPersonList">
              <template #icon><SearchOutlined /></template>查询
            </a-button>
          </a-form-item>
          <a-form-item>
            <!-- 添加人员 -->
            <addPerson></addPerson>
          </a-form-item>
        </a-form>
      </div>
      <div class="person-list">
        <a-row class="list-head list-item" style="font-weight: bold">
          <a-col
            :span="item.span"
            v-for="(item, index) in itemName"
            :key="index"
            :class="item.key"
            >{{ item.value }}</a-col
          >
        </a-row>
        <a-row
          class="list-item"
          v-for="(item, index1) in personList"
          :key="index1"
        >
          <a-col :span="2">{{ item['xh'] }}</a-col>
          <a-col :span="2">{{ item['dlbm'] }}</a-col>
          <a-col :span="3">{{ item['xb'] }}</a-col>
          <a-col :span="4">{{ item['gzzh'] }}</a-col>
          <a-col :span="4">{{ item['dhhm'] }}</a-col>
          <a-col :span="4">{{ item['dzyj'] }}</a-col>
          <a-col :span="3">
            <span>
              <!-- 编辑人员信息 -->
              <editPersonInfo
                v-model:personInfo="personList[index1]"
              ></editPersonInfo>
              <!-- 删除人员信息 -->
              <a-popconfirm
                title="确认删除用户信息吗?"
                ok-text="确认"
                cancel-text="取消"
                @confirm="deletePersonInfo(item.rybm, index1)"
                @cancel="cancel"
              >
                <a href="" style="margin-right: 10px">删除</a>
              </a-popconfirm>
              <!-- 重置人员密码 -->
              <a-popconfirm
                title="确认重置用户密码吗?"
                ok-text="确认"
                cancel-text="取消"
                @confirm="resetPersonPassword(item.rybm)"
                @cancel="cancel"
              >
                <a href="">重置密码</a>
              </a-popconfirm>
            </span></a-col
          >
        </a-row>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import TestData from '@/utils/testdata'
import { Api } from '@/api/index.ts'
import { message } from 'ant-design-vue'
import editPersonInfo from '@/views/sysConfig/components/editPersonInfo.vue'
import addPerson from '@/views/sysConfig/components/addPerson.vue'

export default defineComponent({
  name: '',
  components: {
    PageTitle,
    SearchOutlined,
    // BaseTable,
    editPersonInfo,
    addPerson,
  },
  setup() {
    // 获取列表的请求数据
    const getOrganizationData = {
      curent: 1,
      gzhh: '',
      mc: '',
      orders: { asc: true, column: '' },
      size: 10,
    }
    // 表头及列宽信息
    const itemName = [
      { key: 'xh', value: '序号', span: '2' },
      { key: 'xb', value: '性别', span: '2' },
      { key: 'dlbm', value: '登录别名', span: '3' },
      { key: 'gzzh', value: '工作证号', span: '4' },
      { key: 'dhhm', value: '电话号码', span: '4' },
      { key: 'dzyj', value: '电子邮件', span: '4' },
      { key: 'cz', value: '操作', span: '2' },
    ]
    // 人员列表
    const data = reactive({
      personList: [],
      total: 1,
    })
    // 获取人员列表，并将性别"1""0"分别转化成"男"""女"
    const getPersonList = (getOrganizationData) => {
      Api.getOrganization(getOrganizationData).then((res) => {
        console.log(res.data.entities)
        data.personList = res.data.entities.map((item) => {
          if (item.xb == '0') item.xb = '女'
          else item.xb = '男'
          return item
        })
        data.total = res.data.total
      })
    }
    // 删除人员
    const deletePersonInfo = (rybm: string, index: number) => {
      // Api.deletePersonInfo(rybm).then((res) => {
      //   if (res['success']) {
      if (1) {
        console.log(rybm)
        message.success('人员删除成功！')
        data.personList.splice(index, 1)
      } else message.error('人员删除失败！稍后再试！')
      // }).catch(err=>console.log(err))
    }

    // 重置人员密码
    const resetPersonPassword = (rybm: string) => {
      // Api.resetPersonPassword(rybm).then((res) => {
      //   if (res['success']) {
      if (1) {
        console.log(rybm)
        message.success('密码重置成功！')
      } else message.error('密码重置失败！')
      // }).catch(err=>console.log(err))
    }
    // 弹出确认框是否删除
    const confirm = () => {
      message.success('已成功处理！')
    }
    const cancel = () => {
      message.error('已取消处理！')
    }

    return {
      columns: TestData.userOrg.columns,
      list: data.personList,
      total: data.total,
      getOrganizationData,
      getPersonList,
      confirm,
      cancel,
      itemName,
      deletePersonInfo,
      resetPersonPassword,
      ...toRefs(data),
    }
  },
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
  }
}
</style>
