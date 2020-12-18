<template>
    <a-modal
      title="导入文件"
      v-model:visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      width='900px'
      class="modal"
    >
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <template #trigger>
          <el-button class="upload-btn" size="small" type="primary">
            <div class="box">
              <div class="l">
                请选择要进行导入的Exlce文件进行上传
              </div>
              <div class="r">选择文件</div>
              </div>
          </el-button>
        </template>
        <el-button size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <span class="tag">注：EXCLE表格*列为必填，否则该行不可导入。</span>
      </el-upload>
      <div class="table">
        <upload-table></upload-table>
      </div>
    </a-modal>
</template>

<script>
import { defineComponent, reactive, toRefs, computed } from 'vue'
import UploadTable from './UploadTable.vue'
export default defineComponent({
  props: {
    show: {
      type: Boolean
    }
  },
  components: {
    UploadTable
  },
  setup (props, ctx) {
    /* -- 控制弹窗展示 -- */
    const modalData = reactive({
      visible: computed({
        set: (val) => {
          if (val === false) {
            ctx.emit('update:show', false)
          }
        },
        get: () => props.show
      }),
      confirmLoading: false
    })
    const handleOk = () => {
      // 关闭对话窗口，顺便提交表单
      modalData.confirmLoading = true
      // 这里提交表单
      setTimeout(() => {
        modalData.visible = false
        modalData.confirmLoading = false
      }, 2000)
    }

    /** 上传 */
    const uploadData = reactive({
      fileList: [],
      uploading: false
    })
    const handleRemove = (file, fileList) => {
      console.log(file, fileList)
    }
    const handlePreview = (file) => {
      console.log(file)
    }

    return {
      handleOk,
      ...toRefs(modalData),
      ...toRefs(uploadData),
      handleRemove,
      handlePreview
    }
  }
})
</script>

<style lang="scss" scoped>
.modal {
  /deep/ .ant-modal-content {
    /deep/ .ant-modal-body {
      padding-bottom: 0;
    }
  }
  .upload-demo {
    padding: 0;
    margin-top: -10px;
    .upload-btn {
      background: #fff;
      padding: 0;
      width: 300px;
      border: 1px solid #666666;
      .box {
        display: flex;
        width: 100%;
        .l {
          height: 100%;
          flex: 1;
          padding: 10px;
        }
        .r {
          height: 100%;
          width: 100px;
          background:#c4dcf4;
          padding: 10px;
        }
      }
    }
    .el-button {
      margin-right: 10px;
    }
    .tag {
      width: 250px;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #f68a3b;
      margin-left: 100px;
    }
  }
  .table {
    height: 430px;
    margin-top: 10px;
  }
}
</style>
