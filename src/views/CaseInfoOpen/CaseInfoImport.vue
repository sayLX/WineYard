<template>
  <div class="ctx">
    <div class="body">
      <Title id="title" title="案件信息公开导入" ></Title>
      <div class="import clearfix">
        <span class="nowPath"></span>
        <a-upload :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
        <a-button id="search" >  浏览 </a-button>
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
        <p>* 信息解析完成后，系统将自动把案情变更信息发送到相应辩护代理人手机！</p>
      </div>
      <ul id="fileList" v-show="fileList.length">
        <li id='listTitle'>导入列表明细</li>
        <li class="fileItem" v-for="(file,index) in fileList" :key="index" >
          {{index+1}}&nbsp;&nbsp;
          <span>{{importTime.toLocaleDateString()}}&nbsp;&nbsp;{{importTime.toLocaleTimeString()}}</span>
          <span>文件{{file.name}}</span>
          <span> {{ uploading ? '' : 'Start Upload' }}</span>
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { message } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import Title from './components/Title.vue'
import axios from 'axios'
var myDate=new Date
export default {
  name:'CaseInfoImport',
  components: {
    UploadOutlined,
    Title
  },
  data() {
    return {
      importTime:myDate,
      fileList: [],
      uploading: false,
      headers: {
        authorization: 'authorization-text'
      }
    };
  },
  methods: {
      handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
      },
      beforeUpload(file) {
        this.file=file
        this.fileList = [...this.fileList, file];
        return false;
      },
      handleUpload() {
        const { fileList } = this;
        const formData = new FormData();
        fileList.forEach(file => {
          formData.append('files[]', file);
        });
        this.uploading = true;
        axios.post('https://www.mocky.io/v2/5cc8019d300000980a055e76',form)
          .then(function (response) {
            console.log(response);
            this.fileList = [];
            this.uploading = false;
            message.success('upload successfully.');
          })
          .catch(function (error) {
            console.log(error);
            this.uploading = false;
            message.error('upload failed.');
          })
      },


  }
}
</script>
<style lang="scss" scoped>
  .body {

    .form {
      padding: 10px 20px;
    }
    &>*:not(.title){
      margin-left: 10px;
    }

    // 导入文件模块
    .import{
      margin: 12px 0;
      display: flex;
      #search,#import{
        margin-right: 11px;
        height: 34px;
      }
      #search{
        background-color: rgb(196,220,244);
        color:#5c79b0;;
      }
      #import{
        background-color: rgb(27,156,255);
        color: #fff;

      }
        /deep/ .ant-upload-list{
          display: none;
        }
      .nowPath{
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
    #notice{
      height: 68px;
      padding: 10px;
      background-color: #fcf8e3;
      border: solid 1px #fbd9a7;
      p{
        margin: 0;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0px;
        color: #b58a48;
      }
    }
    // 导入明细列表
    #fileList{
      #listTitle{
        line-height: 40px;
        width: 100%;
        margin-top: 10px;
        border-top: 1px solid rgb(229,236,244);
        border-bottom: 1px solid rgb(229,236,244);

        padding-left: 36px;
        font-size: 14px;
        font-weight:bold;
        list-style: none;
      }
      .fileItem:nth-child(odd){
        background-color: #f8f8fa;

      }
      .fileItem {
        display: inline-block;
        width: 100%;
        border-bottom: 1px solid rgb(229,236,244);
        span{
          height: 41px;
          width: 100%;
          padding-left: 16px;
          line-height: 41px;
          font-size: 14px;
          margin-right: 50px;
        }
      }
    }
  }
</style>
