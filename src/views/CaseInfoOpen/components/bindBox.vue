<template>
  <div>
    <a-button type="primary" @click="showModal"> 绑定 </a-button>
    <a-modal
      title="辩护代理人（张三）"
      :visible="visible"
      ok-text="绑定"
      cancel-text="重置"
      @ok="handleOk"
      @cancel="handleCancel"
      width="950px"
      class="bindBox"
    >
      <div class="bindForm">
        <a-form
          :model="form"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          layout="horizontal"
        >
          <a-row>
            <a-col :span="12">
              <a-form-item label="案件人员编号">
                <a-input placeholder="请输入" v-model:value="form.ajrybh" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="部门受案号">
                <a-input placeholder="请输入" v-model:value="form.bmsah" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="电话号码">
                <a-input placeholder="请输入" v-model:value="form.dhhm" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="人员类型编码">
                <a-input placeholder="请输入" v-model:value="form.rylxbm" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="人员类型名称">
                <a-input placeholder="请输入" v-model:value="form.rylxmc" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="身份类型编码">
                <a-input placeholder="请输入" v-model:value="form.sflxbm" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="身份类型名称">
                <a-input placeholder="请输入" v-model:value="form.sflxmc" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="姓名">
                <a-input placeholder="请输入" v-model:value="form.xm" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="证件号码">
                <a-input placeholder="请输入" v-model:value="form.zjhm" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="证件类型名称">
                <a-input placeholder="请输入" v-model:value="form.zjlxmc" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="自然人类型编码">
                <a-input placeholder="请输入" v-model:value="form.zrrlxbm" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="自然人类型名称">
                <a-input placeholder="请输入" v-model:value="form.zrrlxmc" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: 'bindBox',
  data() {
    return {
      visible: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      form: {
        ajrybh: '123445',
        bmsah: '9807',
        dhhm: '',
        rylxbm: '',
        rylxmc: '',
        sflxbm: '',
        sflxmc: '',
        xm: '哆啦A梦大裤衩',
        zjhm: '',
        zjlxmc: '',
        zrrlxbm: '',
        zrrlxmc: '',
      },
    }
  },
  methods: {
    //点击人员列表绑定按钮
    showModal() {
      this.visible = true
    },
    // 检验是否完全填写
    checkForm(form) {
      console.log(Object.values(form).filter(value=>value !=""))
      if(Object.values(form).filter(value=>value !="").length < Object.values(form).length){
        return false
      }
      else return true
    },
    // 重置form
    resetForm(){
      for (const key in this.form) {
        if (this.form[key]) {
          this.form[key] = ''
        }
      }
    },
    //点击弹出框内绑定
    handleOk() {
      if (this.checkForm(this.form)) {
        this.$message.success('绑定成功！')
        setTimeout(() => {
          this.visible = false
          this.resetForm()
        }, 10)
      } else {
        this.$message.warning('还有数据未填写！')
      }
      // this.$message.error('绑定失败，请稍后再试！');
    },
    //点击弹出框重置
    handleCancel() {
      if(confirm("是否重置？")){
        this.resetForm()
      }
        setTimeout(() => {
          this.visible = false
        }, 10)
    },
  },
}
</script>
<style lang="scss" scoped>
.ant-modal-header {
  background-color: #a9c4df;
}
.bindForm {
  /deep/ .ant-form-item {
    margin-bottom: 9px !important;
    textarea {
      border-color: rgb(217, 217, 217);
      &:hover {
        border-color: rgb(64, 169, 255);
      }
      &:focus {
        outline: none;
        border-color: rgb(64, 169, 255);
        box-shadow: 0 0 8px rgb(209, 233, 255);
      }
    }
  }
}
</style>
