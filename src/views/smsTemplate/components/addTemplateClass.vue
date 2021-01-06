<template>
  <div>
    <a-button @click="showModal">
      <template #icon><PlusOutlined /></template>新增
    </a-button>
    <a-modal
      title="添加模板类别"
      :visible="visible"
      ok-text="添加"
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
            <a-col
              :span="12"
              v-for="(Key, index) in Object.keys(form)"
              :key="index"
            >
              <a-form-item :label="tableHead[Key]">
                <a-input v-model:value="form[Key]" placeholder="请输入" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { Api } from '@/api/index'
import { PlusOutlined } from '@ant-design/icons-vue'

export default {
  name: 'addTemplateClass',
  components: {
    PlusOutlined,
  },
  data() {
    return {
      visible: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      // 表头
      tableHead: {
        dwbm: '单位编码',
        mblbmc: '模板类别名称',
        mblxdm: '模板类型代码',
        sm: '说明',
        xh: '序号',
      },

      form: {
        // 测试数据
        xh: 1,
        mblbmc: '空模板',
        dwbm: '100000',
        mblxdm: '9804555555555',
        sm: '这是一个模板',
      },
    }
  },
  methods: {
    // 点击人员列表绑定按钮
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
    // 重置form
    resetForm() {
      for (const key in this.form) {
        if (this.form[key]) {
          this.form[key] = ''
        }
      }
    },
    // 点击弹出框内绑定
    handleOk() {
      if (this.checkForm(this.form)) {
        Api.addTemplateClass(this.form).then((res) => {
          if (res.success) {
            this.$message.success('添加成功！')
            setTimeout(() => {
              this.visible = false
              this.resetForm()
            }, 500)
          } else {
            this.$message.error(res.message)
          }
        })
      } else {
        this.$message.warning('请填写完整所有项目！')
      }
    },
    // 关闭弹出框
    handleCancel() {
      this.resetForm()
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
