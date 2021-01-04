<template>
  <div class="ctx">
    <div class="body">
      <Title id="title" title="案件信息公开导入"></Title>
      <div class="import clearfix">
        <span class="nowPath">&nbsp;&nbsp;{{ latestFile }} </span>
        <a-upload
          :fileList="fileList"
          v-model:name="latestFile"
          :beforeUpload="beforeUpload"
          accept=".zip"
        >
          <a-button id="search"> 浏览 </a-button>
        </a-upload>
        <a-button
          id="import"
          type="primary"
          :disabled="fileList.length === 0"
          :loading="uploading"
          @click="handleUpload"
        >
          导入
        </a-button>
      </div>

      <div id="notice">
        <p>*仅支持统一业务应用系统案件信息公开导出数据！</p>
        <p>* 导入时，仅解析嫌疑人/当事人信息！</p>
        <p>
          * 信息解析完成后，系统将自动把案情变更信息发送到相应辩护代理人手机！
        </p>
      </div>
      <ul id="fileList" v-show="fileList.length">
        <li id="listTitle">导入列表明细</li>
        <li class="fileItem" v-for="(file, index) in fileList" :key="index">
          <span
            >{{ index + 1 }}&nbsp;&nbsp;{{
              importTime.toLocaleDateString()
            }}&nbsp;&nbsp;{{ importTime.toLocaleTimeString() }}</span
          >
          <span class="fileName">{{ file.name }}</span>
          <span> {{ uploading ? '上传完成!' : '等待上传...' }}</span>
        </li>
        <li class="fileItem">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            嫌疑人/当事人共{{importResult["total"]}}个，
            解析成功{{ importResult["success"] }}个，
            失败{{importResult["failed"]}}个
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { message } from 'ant-design-vue'
import Title from './components/Title.vue'
import { Api } from '@/api/index'

export default {
  name: 'CaseInfoImport',
  components: {
    Title,
  },
  data() {
    return {
      importTime: new Date(),
      latestFile: '',
      // 储存导入的文件名，用来验证是否导入重复文件
      allFileName: [],
      fileList: [],
      uploading: false,
      importResult: { total: 0, success: 0, failed: 0 },
      headers: {
        authorization: 'authorization-text',
      },
    }
  },
  methods: {
    beforeUpload(file) {
      // 判断和前一个文件是否是同一个文件
      if (!this.fileList.length || this.allFileName.indexOf(file.name) < 0) {
        this.fileList.push(file)
        this.allFileName.push(file.name)
        // 获得当前选择文件名
        this.latestFile = file.name
      } else {
        message.warning('导入重复或重名文件，请重命名后再试！')
      }
      return false
    },
    handleUpload() {
      this.uploading = true
      const { fileList } = this
      const formData = new FormData()
      fileList.forEach((file) => {
        formData.append('files[]', file)
      })
      this.uploading = true
      Api.importCaseinfo({ wjlj: this.latestFile }).then((res) => {
        if(res.success){
        // this.importResult = res.data
        this.importResult.total+=1
        this.importResult.success+=1
          this.uploading = false
          message.success('上传成功！')
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.body {
  .form {
    padding: 10px 20px;
  }
  & > *:not(.title) {
    margin-left: 10px;
  }

  // 导入文件模块
  .import {
    margin: 12px 10px;
    display: flex;
    #search,
    #import {
      margin-right: 11px;
      height: 34px;
    }
    #search {
      background-color: rgb(196, 220, 244);
      color: #5c79b0;
    }
    #import {
      background-color: rgb(27, 156, 255);
      color: #fff;
    }
    /deep/ .ant-upload-list {
      display: none;
    }
    .nowPath {
      width: 463px;
      height: 34px;
      font-size: 14px;
      display: inline-block;
      border-radius: 3px;
      border: solid 1px #dcdfe6;
      line-height: 34px;
    }
  }
  // 注意事项
  #notice {
    height: 68px;
    padding: 10px;
    background-color: #fcf8e3;
    border: solid 1px #fbd9a7;
    p {
      margin: 0;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0px;
      color: #b58a48;
    }
  }
  // 导入明细列表
  #fileList {
    #listTitle {
      line-height: 40px;
      width: 100%;
      margin-top: 10px;
      border-top: 1px solid rgb(229, 236, 244);
      border-bottom: 1px solid rgb(229, 236, 244);
      padding-left: 36px;
      font-size: 14px;
      font-weight: bold;
      list-style: none;
    }
    .fileItem:nth-child(odd) {
      background-color: #f8f8fa;
    }
    .fileItem {
      overflow: hidden;
      width: 100%;
      border-bottom: 1px solid rgb(229, 236, 244);
      &:last-child span {
        width: 500px;
      }
      span {
        float: left;
        height: 41px;
        width: 300px;
        padding-left: 16px;
        line-height: 41px;
        font-size: 14px;
        margin-right: 50px;
      }
    }
  }
}
</style>
