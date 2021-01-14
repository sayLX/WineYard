<template>
  <a @click="showModal" style="margin-right: 10px">编辑</a>
  <a-modal
    title="编辑人员信息"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    width="740px"
  >
    <div class="sms">
      <div
        class="type1"
        v-for="(Key, index) in Object.keys(personInfoName)"
        :key="index"
      >
        <span>*{{ personInfoName[Key] }}</span>
        <input
          type="text"
          v-model="mypersonInfo[Key]"
          style="margin-bottom: 5px; text-indent: 10px"
        />
      </div>
      <br />
    </div>
  </a-modal>
</template>
<script>
import { message } from 'ant-design-vue'
import { Api } from '@/api/index.ts'
export default {
  name: 'addTemplate',
  props: ['personInfo', 'title'],
  data() {
    return {
      visible: false,
      confirmLoading: false,
      newTemplate: { type: '', name: '', content: '' },
      mypersonInfo:this.personInfo,
      personInfoName: {
        dhhm: '电话号码',
        dlbm: '登录别名',
        dzyj: '电子邮件',
        gzzh: '工作证号',
        mc: '名称',
        rybm: '人员编码',
        sflsry: '是否临时人员',
        sftz: '是否停职',
        sfzh: '身份证号',
        xb: '性别',
        xh: '序号',
        zzdwmc: '在职单位名称',
      },
    }
  },
  methods: {
    //显示模态框
    showModal() {
      this.visible = true
    },
    //点击ok
    handleOk() {
      this.confirmLoading = true
      if (this.mypersonInfo.xb == '男') item.xb = '1'
      // eslint-disable-next-line vue/no-mutating-props
      else { this.mypersonInfo.xb = '0' }
      Api.editPersonInfo(this.mypersonInfo).then((res) => {
        if (res.success) {
          setTimeout(() => {
            this.confirmLoading = false
            message.success('编辑成功！')
            this.visible = false
          }, 1000)
        }
      })
    },
    handleCancel() {
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 100)
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
    width: 120px;
    line-height: 34px;
    padding-right: 10px;
    display: inline-block;
    text-align: right;
  }
  input{
    height: 34px;
    width: 400px;
    border: solid 1px #d8d7d7;
  }
}
</style>
