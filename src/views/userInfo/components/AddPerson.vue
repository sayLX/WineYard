<template>
  <a-button type="primary" @click="showModal">
    <template #icon><PlusOutlined /></template>添加
  </a-button>
  <a-modal
    title="添加人员信息"
    :visible="visible"
    ok-text="添加"
    @ok="handleOk(personInfo)"
    @cancel="handleCancel()"
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
          v-model="personInfo[Key]"
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
  name: 'AddPerson',
  components: {
    PlusOutlined,
  },
  data() {
    return {
      visible: false,
      newTemplate: { type: '', name: '', content: '' },
      personInfoName: {
        xb: '性别',
        xm: '姓名',
        zzdw: '在职单位',
        bylxdh: '备用联系电话	',
        dhhm: '移动电话号码	',
        dzyj: '电子邮件	',
        lszh: '律师证号	',
        lxdz: '联系地址	',
        sfzjhm: '身份证件号码	',
      },
      personInfo: {
        bylxdh: '13088176128',
        dhhm: '17088176128',
        dzyj: '36550289@qq.com',
        lszh: '14116201010328104',
        lxdz: '四川省成都市武侯区花园小区',
        sfzjhm: '511023197610243000',
        xb: '男',
        xm: '马云',
        zzdw: '同方赛威讯政法事业部',
      },
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
      if (this.checkForm(data)) {
        Api.addPersonInfo(data).then((res) => {
          parseInt(data.xh)
          console.log(data)
          res.success && message.success('添加成功') && this.handleCancel()
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
        for (const key of Object.keys(this.personInfo)) {
          this.personInfo[key] = ''
        }
        this.visible = false
        this.confirmLoading = false
      }, 100)
    },
    addPersonInfo(data) {
      Api.addLawyer(data).then(res=>{
        if(res.success){
          message.success("添加成功！")
          this.visible=false
        }
      })
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
