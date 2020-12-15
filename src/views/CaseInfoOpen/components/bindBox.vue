<template>
  <div>
    <a-button type="primary" @click="showModal"> 绑定 </a-button>
    <a-modal
      title="辩护代理人（张三）"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      width="705px"
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
              <a-form-item label="律师库">
                <a-select style="width: 548px" v-model="form.lawyer" placeholder="请输入">
                  <a-select-option value="shanghai"> Zone one </a-select-option>
                  <a-select-option value="beijing"> Zone two </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row>
            <a-col :span="12">
              <a-form-item label="人员姓名">
                <a-input placeholder="请输入" v-model="form.name" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="人员类型">
                <a-select v-model="form.staffType" placeholder="请选择">
                  <a-select-option value="shanghai"> Zone one </a-select-option>
                  <a-select-option value="beijing"> Zone two </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row>
            <a-col :span="12">
              <a-form-item label="身份类型">
                <a-select v-model="form.identityType" placeholder="请选择">
                  <a-select-option value="shanghai"> Zone one </a-select-option>
                  <a-select-option value="beijing"> Zone two </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="证件类型">
                <a-select v-model="form.cardType" placeholder="请选择">
                  <a-select-option value="shanghai"> Zone one </a-select-option>
                  <a-select-option value="beijing"> Zone two </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row>
            <a-col :span="12">
              <a-form-item label="证件号码">
                <a-input placeholder="请输入" v-model="form.cardNumber" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="联系电话">
                <a-input placeholder="请输入" v-model="form.firstNumber" />
              </a-form-item>
            </a-col>
          </a-row>

          <a-row>
            <a-col :span="12">
              <a-form-item label="备用电话">
                <a-input placeholder="请输入" v-model="form.secondNumber" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="电子邮箱">
                <a-input placeholder="请输入" v-model="form.email" />
              </a-form-item>
            </a-col>
          </a-row>

          <a-row>
            <a-col :span="12">
              <a-form-item label="联系地址">
                <a-input style="width:548px" placeholder="请输入" v-model="form.address" />
              </a-form-item>
            </a-col>
          </a-row>

          <a-row>
            <a-col :span="12">
              <a-form-item label="备注信息" name="note">
                <textarea rows="3" cols="83" placeholder="请输入" v-model="form.note" />
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
      confirmLoading: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      form: {
        lawyer: '',
        name: '',
        staffType: '',
        indentityType: '',
        cardType: '',
        cardNumber: '',
        firstNumber: '',
        secondNumber: '',
        email: '',
        address: '',
        note: '',
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
      this.ModalText = 'The modal will be closed after two seconds'
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 10)
    },
    //点击cancel
    handleCancel() {
      console.log('Clicked cancel button')
      this.visible = false
    },
    onSubmit() {
      console.log('submit!', this.form)
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
    textarea{
        border-color: rgb(217,217,217);
      &:hover{
        border-color:rgb(64,169,255);
      }
      &:focus{
        outline: none;
        border-color:rgb(64,169,255);
        box-shadow: 0 0 8px rgb(209,233,255);
      }
    }
  }
}
</style>
