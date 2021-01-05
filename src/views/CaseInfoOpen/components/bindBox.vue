<template>
  <div>
    <a @click="showModal" style="margin-left: 40px"> 绑定 </a>
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
export default {
  name: 'bindBox',
  props: {
    detail: Object,
  },
  data() {
    return {
      visible: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      // 表头
      tableHead: {
        ajrybh: '案件人员编号',
        bmsah: '部门受案号',
        xm: '姓名',
        zjhm: '证件号码',
        zjlxmc: '证件类型名称',
        dhhm: '电话号码',
        rylxbm: '人员类型编码',
        rylxmc: '人员类型名称',
        sflxbm: '身份类型编码',
        sflxmc: '身份类型名称',
        zjlxbm: '证件类型编码',
        zrrlxbm: '自然人类型编码',
        zrrlxmc: '自然人类型名称',
      },
      // 用户输入数据
      // form: {
      //   ajrybh: '',
      //   bmsah: '',
      //   xm: '',
      //   zjhm: '',
      //   zjlxmc: '',
      //   dhhm: '',
      //   rylxbm: '',
      //   rylxmc: '',
      //   sflxbm: '',
      //   sflxmc: '',
      //   zjlxbm: '',
      //   zrrlxbm: '',
      //   zrrlxmc: '',
      // },

      form: {
        // 测试数据
        ajrybh: '1452441257411',
        bmsah: '冷检起诉受[2014]2014075421号',
        dhhm: '17456988524',
        rylxbm: '1403187300001',
        rylxmc: '辩护人',
        sflxbm: '1404187300003',
        sflxmc: '律师',
        xm: '李斯',
        zjhm: '1452547895412644',
        zjlxbm: '148851568585885',
        zjlxmc: '律师执业证',
        zrrlxbm: '1452145511',
        zrrlxmc: '嫌疑人',
      },
    }
  },
  methods: {
    // 点击人员列表绑定按钮
    showModal() {
      this.visible = true
      Object.keys(this.detail).forEach((key) => {
        if (this.form.hasOwnProperty(key)) {
          this.form[key] = this.detail[key]
        }
      })
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
        Api.bindAgent(this.form).then((res) => {
          if (res.success) {
            this.$message.success('绑定成功！')
            this.resetForm()
            setTimeout(() => {
              this.visible = false
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
