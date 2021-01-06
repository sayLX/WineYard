<template>
  <div class="ctx">
    <div class="body">
      <page-title title="律师信息管理"></page-title>
      <div class="form">
        <a-form layout="inline">
          <a-form-item label="姓名" name="name">
            <div class="input">
              <a-input placeholder="请输入"> </a-input>
            </div>
          </a-form-item>
          <a-form-item label="律师证号" name="region">
            <div class="input">
              <a-input placeholder="请输入"> </a-input>
            </div>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="getLawyerList(requestData)">
              查询
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <div class="btn-list">
    <add-person></add-person>

        <a-button class="a-button" @click="showDirModal">
          <template #icon><FolderOpenOutlined /></template>文件导入
        </a-button>
      </div>
      <div class="column" :class="{ display: isDisplay }">
        <div class="person-list">
          <!-- 表头 -->
          <a-row class="list-head list-item" style="font-weight: bold">
            <a-col
              :span="item.span"
              v-for="(item, index) in itemName"
              :key="index"
              :class="item.key"
              >{{ item.value }}</a-col
            >
            <a-col span="2">操作</a-col>
          </a-row>
          <!-- 人员列表 -->
          <a-row
            class="list-item"
            v-for="(item1, index1) in personList"
            :key="index1"
          >
            <a-col
              v-for="(item2, index2) in itemName"
              :span="item2.span"
              :key="index2"
              :class="item2['key']"
              >{{ item1[item2['key']] }}</a-col
            >
            <a-col :span="2">
              <span>
                <!-- 编辑律师信息 -->
                <!-- <edit-person></edit-person> -->
                <!-- 删除律师信息 -->
                <a-popconfirm
                  title="确认删除用户信息吗?"
                  ok-text="确认"
                  cancel-text="取消"
                  @confirm="deletePersonInfo(item1.lsbm, index1)"
                  @cancel="cancel"
                >
                  <a href="" style="margin-right: 10px">删除</a>
                </a-popconfirm>
              </span></a-col
            >
          </a-row>
        </div>
      </div>
    </div>
    <upload-lawyer v-model:show="dirShow"></upload-lawyer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import { FolderOpenOutlined, PlusOutlined } from '@ant-design/icons-vue'
// import TestData from '@/utils/testdata'
// import AddLawyer from './components/AddLawyer.vue'
import UploadLawyer from './components/UploadLawyer.vue'
import AddPerson from './components/AddPerson.vue'
import EditPerson from './components/EditPerson.vue'
import { message } from 'ant-design-vue'
import { Api } from '@/api/index.ts'

export default defineComponent({
  name: '',
  components: {
    FolderOpenOutlined,
    PageTitle,
    PlusOutlined,
    // AddLawyer,
    UploadLawyer,
    AddPerson,
    EditPerson,
  },
  data() {
    return {
      show: false,
      dirShow: false,
      // 表头及列宽信息
      itemName: [
        { key: 'xm', value: '姓名', span: '2' },
        { key: 'lszh', value: '律师证号', span: '4' },
        { key: 'sfzjhm', value: '身份证件号码', span: '4' },
        { key: 'dhhm', value: '电话号码', span: '4' },
        { key: 'bylxdh', value: '备用电话号码', span: '4' },
        { key: 'lxdz', value: '联系地址', span: '4' },
      ],
      // 人员列表
      personList: [],
      total: 1,
      requestData: {
        lszh: '14116201010328104',
        pageIndex: 1,
        pageSize: 10,
        startIndex: 0,
        xm: '马云',
        zzdw: '同方赛威讯政法事业部',
      },
      isDisplay: true,
    }
  },
  methods: {
    showModal() {
      this.show = true
    },
    // 获取律师人员列表
    getLawyerList(data) {
      Api.getLawyerList(data).then((res) => {
        if (res['success'] && res.data.totalRecords != 0) {
          this.isDisplay = false
          this.personList = res.data.lawyerQueryList
        }
      })
    },
    // 删除人员
    deletePersonInfo(lsbm: string, index: number) {
      console.log(lsbm)
      // Api.deletePersonInfo(lsbm).then((res) => {
      //   if (res['success']) {
      if (1) {
        message.success('人员删除成功！')
        this.personList.splice(index, 1)
      } else message.error('人员删除失败！稍后再试！')
      // }).catch(err=>console.log(err))
    },
    // 弹出确认框是否删除
    confirm() {
      message.success('已成功处理！')
    },
    cancel() {
      message.error('已取消处理！')
    },

    /** 导入 */
    showDirModal() {
      this.dirShow = true
    },
  },
  mounted() {
    // this.getLawyerList(this.requestData)
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
    $border: 1px solid #d8d7d7;
    .display {
      display: none;
    }
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
