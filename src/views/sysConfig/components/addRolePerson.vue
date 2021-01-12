<template>
  <a-button type="primary" @click="showModal" style="margin-left: 10px">
    <template #icon><PlusOutlined /></template>添加
  </a-button>
  <a-modal
    title="人员新增"
    :visible="visible"
    ok-text="确定"
    @ok="handleOk"
    @cancel="handleCancel"
    width="840px"
  >
    <div class="form">
      <a-form layout="inline">
        <a-form-item label="姓名">
          <div class="input">
            <a-input
              placeholder="请输入"
              v-model:value="getOrganizationData.mc"
            >
            </a-input>
          </div>
        </a-form-item>
        <a-form-item label="工作证号">
          <div class="input">
            <a-input
              placeholder="请输入"
              v-model:value="getOrganizationData.gzzh"
            >
            </a-input>
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
      <!-- 表头 -->

      <!-- 列表项 -->
      <a-checkbox-group v-model:value="value" @change="onChange">
        <a-row class="list-head list-item" style="font-weight: bold">
          <a-col
            :span="item.span"
            v-for="(item, index) in itemName"
            :key="index"
            :class="item.key"
            >{{ item.value }}
          </a-col>
        </a-row>
        <a-row
          class="list-item"
          v-for="(item1, index1) in personList"
          :key="index1"
        >
          <a-checkbox :value="index1">
            <a-col
              :span="item2.span"
              v-for="(item2, index2) in itemName"
              :key="index2"
              :class="item2.key"
              >{{ item1[item2.key] }}
            </a-col>
          </a-checkbox>
        </a-row>
      </a-checkbox-group>
    </div>
  </a-modal>
</template>
<script>
import { SearchOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { Api } from '@/api/index.ts'
// import { message } from 'ant-design-vue'
export default {
  name: 'addRolePerson',
  components: {
    SearchOutlined,
    PlusOutlined,
  },
  props: ['roleInfo'],
  data() {
    return {
      visible: false,
      value: [],
      getOrganizationData: {
        curent: 1,
        gzzh: '',
        mc: '',
        size: 10,
        zzdwbm: '980000',
      },
      personList: [],
      itemName: [
        { key: 'xh', value: '序号', span: '6' },
        { key: 'mc', value: '姓名', span: '6' },
        { key: 'dlbm', value: '登录别名', span: '6' },
        { key: 'gzzh', value: '工作证号', span: '6' },
      ],
    }
  },
  mounted() {
    this.queryPerson()
  },
  methods: {
    //显示模态框
    showModal() {
      this.visible = true
    },
    // 输入框查询人员

    // 获取单位人员列表
    queryPerson() {
      const mydata = this.getOrganizationData
      Api.getOrganization(mydata).then((res) => {
        this.personList = res.data.entities
      })
    },
    // 添加角色人员表

    // 选择状态发生变化时回调
    onChange() {
      console.log(this.value['0'])
    },
    // 点击ok
    handleOk() {
      const rybm = this.personList[parseInt(this.value['0'])].rybm
      const ryxh = this.personList[parseInt(this.value['0'])].xh
      const otherInfo = { rybm: rybm, ryxh: ryxh, zjldbm: '' }
      const mydata = Object.assign({}, otherInfo, this.roleInfo)
      Api.addRolePerson(mydata).then((res) => {
        if (res.success) {
          mess.success('添加成功！')
          setTimeout(() => {
            this.visible = false
          }, 100)
        }
      })
    },
    // 点击取消
    handleCancel() {
      setTimeout(() => {
        this.visible = false
      }, 100)
    },
  },
}
</script>
<style lang="scss" scoped>
.person-list {
  /deep/ .ant-checkbox-group {
    width: 100%;
    padding: 10px;
    padding-top: 0;
    $border: 1px solid #d8d7d7;
    .list-item {
      height: 40px;
      line-height: 40px;
      border-bottom: $border;
      &:nth-child(even) {
        background-color: rgb(250, 250, 250);
      }
      width: 100%;
      .ant-checkbox-wrapper {
        width: 100%;
        span:first-child {
          display: inline-block;
          span {
            display: inline-block;
            width: 18px;
          }
          &:hover {
            border: none;
          }
        }
        span:last-child {
          display: inline-flex;
          justify-content: space-between;
          flex-grow: 1;
          width: calc(100% - 40px);
          div {
            display: inline-block;
            text-indent: 15px;
          }
        }
      }
    }
    .list-head {
      padding-left: 40px;
      .dlbm {
        margin-left: -5px;
      }
      .gzzh {
        margin-left: -5px;
      }
    }
  }
}
</style>
