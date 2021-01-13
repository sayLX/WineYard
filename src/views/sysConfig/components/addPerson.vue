<template>
  <a-button type="primary" @click="showModal" :disabled="disabled">
    <template #icon><PlusOutlined /></template>{{title}}
  </a-button>
  <a-modal
    :title="title"
    :visible="visible"
    ok-text="确定"
    @ok="handleOk(personInfo)"
    @cancel="handleCancel()"
    width="740px"
  >
    <div class="sms">
      <div
        class="type1"
        v-for="(Key, index) in Object.keys(tHead)"
        :key="index"
      >
        <span style="width:150px">*{{ tHead[Key] }}</span>
        <input
          type="text"
          v-model="person[key]"
          style="margin-bottom: 5px; text-indent: 10px"
        />
      </div>
      <br />
    </div>
  </a-modal>
</template>
<script>
import { message } from 'ant-design-vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import { Api } from '@/api/index.ts'
export default {
  name: 'addTemplate',
  components: {
    PlusOutlined,
  },
  props: ["title","tHead","personInfo","add","disabled"],
  computed: {
    person: {
      get: function () {
        return this.personInfo
      },
      set: (value) => {
        return value
      }
    }
  },
  data() {
    return {
      visible: false,
      newTemplate: { type: '', name: '', content: '' },
      // tHead: {
      //   dhhm: '电话号码',
      //   dlbm: '登录别名',
      //   dzyj: '电子邮件',
      //   gzzh: '工作证号',
      //   mc: '名称',
      //   sflsry: '是否临时人员',
      //   sfzh: '身份证号',
      //   xb: '性别',
      //   xh: '人员序号',
      //   zzdwbm:"在职单位编码",
      //   zzdwmc: '在职单位名称',
      // },
      // personInfo: {
      //   dhhm: '13512345678',
      //   dlbm: 'test1803',
      //   dzyj: 'hjhk@thtf.com.cn',
      //   gzzh: '980000001006',
      //   mc: '测试账号1808',
      //   sflsry: 'N',
      //   sfzh: '510723198903050800',
      //   xb: '0',
      //   xh: "35",
      //   zzdwbm:"980000",
      //   zzdwmc: '汉东省院 【内部测试】',
      // },
    }
  },
  methods: {
    //显示模态框
    showModal() {
      this.visible = true
    },
    // 检验表单是否完全填写
    checkForm(form) {
      if (
        Object.values(form).filter((value) => value != '').length <
        Object.values(form).length
      ) {
        return false
      } else return true
    },
    //点击确定
    handleOk(data) {
      console.log("数据来了")
      if (this.checkForm(data)) {
        console.log(data)
        this.add(data).then((res) => {
          data.hasOwnProperty("xh")&&parseInt(data.xh)
          res.success && message.success('操作成功')&&this.handleCancel()
          !res.success && message.error(res.message)
        })
      } else {
        message.warning('数据未填写完整！')
      }
    },
    // 点击取消
    handleCancel() {
      setTimeout(() => {
        // 清空用户输入的数据
        // for (const key of Object.keys(this.personInfo)) {
        //   this.personInfo[key] = ''
        // }
        this.visible = false
        this.confirmLoading = false
      }, 100)
    },
    getOrganization() {
      Api.getOrganization()
    },
  },
}
</script>
<style lang="scss" scoped>
/deep/ .ant-modal-content {
  width: 705px;
  height: 512px;
  background-color: #ffffff;
  border-radius: 5px;
  border: solid 1px #a9c4df;
}
.sms {
  width: 621px;
  margin: 0 auto;
  margin-top: 25px;
  span {
    width: 100px;
    line-height: 34px;
    padding-right: 10px;
    display: inline-block;
    text-align: right;
  }
  input,
  select {
    height: 34px;
    width: 400px;
    border: solid 1px #d8d7d7;
  }
}
</style>
