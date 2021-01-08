<template>
  <div class="ctx">
    <div class="body">
      <page-title title="用户管理"></page-title>
      <div class="form">
        <a-form layout="inline">
          <a-form-item label="姓名" name="mc">
            <div class="input">
              <a-input v-model:value="mc" placeholder="请输入"> </a-input>
            </div>
          </a-form-item>
          <a-form-item label="工作证号" name="gzzh">
            <div class="input">
              <a-input v-model:value="gzzh" placeholder="请输入"> </a-input>
            </div>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="getPersonList">
              <template #icon><SearchOutlined /></template>查询
            </a-button>
          </a-form-item>
          <a-form-item>
            <!-- 添加人员 -->
            <addPerson :personInfo="personInfo" :tHead="personInfoName" title="添加人员信息"></addPerson>
          </a-form-item>
        </a-form>
      </div>
      <div class="person-list">
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
            >{{ item1[item2.key] }}</a-col
          >
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
                @confirm="deletePersonInfo(item1.rybm, index1)"
                @cancel="cancel"
              >
                <a href="" style="margin-right: 10px">删除</a>
              </a-popconfirm>
              <!-- 重置人员密码 -->
              <a-popconfirm
                title="确认重置用户密码吗?"
                ok-text="确认"
                cancel-text="取消"
                @confirm="resetPersonPassword(item1.rybm)"
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
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
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
    const getOrganizationData = reactive({
      curent: 1,
      gzzh: '',
      mc: '',
      size: 10,
      zzdwbm: '',
    })
    // 表头及列宽信息
    const itemName = [
      { key: 'xh', value: '序号', span: '2' },
      { key: 'xb', value: '性别', span: '2' },
      { key: 'dlbm', value: '登录别名', span: '3' },
      { key: 'gzzh', value: '工作证号', span: '4' },
      { key: 'dhhm', value: '电话号码', span: '4' },
      { key: 'dzyj', value: '电子邮件', span: '4' },
    ]
    // 添加人员信息表头
    const personInfoName = {
      dhhm: '电话号码',
      dlbm: '登录别名',
      dzyj: '电子邮件',
      gzzh: '工作证号',
      mc: '名称',
      sflsry: '是否临时人员',
      sfzh: '身份证号',
      xb: '性别',
      xh: '人员序号',
      zzdwbm: '在职单位编码',
      zzdwmc: '在职单位名称',
    }
    // 添加人员信息输入框数据
    const personInfo = {
      dhhm: '13512345678',
      dlbm: 'test1803',
      dzyj: 'hjhk@thtf.com.cn',
      gzzh: '980000001006',
      mc: '测试账号1808',
      sflsry: 'N',
      sfzh: '510723198903050800',
      xb: '0',
      xh: '35',
      zzdwbm: '980000',
      zzdwmc: '汉东省院 【内部测试】',
    }
    // 人员列表
    const data = reactive({
      personList: [],
      total: 1,
    })

    // 获取人员列表，并将性别"1""0"分别转化成"男"""女"
    const getPersonList = () => {
      const mydata = getOrganizationData
      Api.getOrganization(mydata).then((res) => {
        data.personList = res.data.entities.map((item) => {
          if (item.xb == '0') item.xb = '女'
          else item.xb = '男'
          return item
        })
        data.total = res.data.total
      })
    }
    // 预加载所有人员
    onMounted(() => {
      getPersonList()
    })
    // 删除人员
    const deletePersonInfo = (rybm: string, index: number) => {
      Api.deletePersonInfo(rybm)
        .then((res) => {
          if (res['success']) {
            console.log(rybm)
            message.success('人员删除成功！')
            data.personList.splice(index, 1)
          } else message.error('人员删除失败！稍后再试！')
        })
        .catch((err) => console.log(err))
    }
    // 重置人员密码
    const resetPersonPassword = (rybm: string) => {
      Api.resetPersonPassword(rybm)
        .then((res) => {
          if (res['success']) {
            message.success('密码重置成功！')
          } else message.error('密码重置失败！')
        })
        .catch((err) => console.log(err))
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
      getPersonList,
      confirm,
      cancel,
      itemName,
      deletePersonInfo,
      resetPersonPassword,
      personInfoName,
      personInfo,
      ...toRefs(data),
      ...toRefs(getOrganizationData),
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
