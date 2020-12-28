<template>
  <div>
    <a-button @click="showModal">
      <template #icon><FormOutlined /></template>编辑
    </a-button>
    <a-modal
      title="编辑短信模板"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      width="740px"
    >
      <div class="sms">
        <div>
          <span>模板类型</span>
          <input type="text" placeholder="请输入" />
        </div>
        <br />
        <div>
          <span>模板名称</span>
          <select aria-placeholder="请选择模板">
            <option disabled aria-placeholder="请选择模板"></option>
            <option value="">模板1</option>
            <option value="">模板2</option>
          </select>
        </div>
        <div class="template-content">
          <span class="template-title">模板内容</span>
          <textarea cols="10"></textarea>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { FormOutlined } from '@ant-design/icons-vue'
export default {
  name: 'editTemplate',
  components: {
    FormOutlined,
  },
  data() {
    return {
      visible: false,
      confirmLoading: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
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
    width: 80px;
    line-height: 34px;
    padding-right: 10px;
    display: inline-block;
    text-align: right;
  }
  p {
    line-height: 28px;
    font-size: 12px;
    color: #f68a3b;
    margin-left: 80px;
    margin-bottom: 0;
  }
  input,
  select,
  textarea {
    height: 34px;
    width: 541px;
    border: solid 1px #d8d7d7;
  }
  .template-content {
    position: relative;
    height: 200px;
    margin-top: 20px;
    textarea {
      height: 200px;
      line-height: 20px;
      font-size: 14px;
      position: absolute;
      left: 80px;
    }
    span {
      position: absolute;
    }
  }
}
</style>
