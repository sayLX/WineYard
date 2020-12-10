<template>
    <div>
        <a-button type="primary" @click="showModal">
           添加
        </a-button>
        <a-modal
            title="添加短信模板"
            :visible="visible"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
            width='740px'
        >
        <div class="sms">
          <div class="type1">
            <span>模板类型</span>
            <input type="text" :value="newTemplate['type']" placeholder="请输入模板类型">
          </div>
            <br>
          <div class="sms-template">
            <span>模板名称</span>
            <input type='text' v-model="newTemplate['name']" placeholder="请输入模板名字">
          </div>
          <div class="template-content">
            <span class="template-title">模板内容</span>
            <textarea cols="10" v-model="newTemplate['content']" placeholder="请输入模板内容"></textarea>
          </div>
        </div>
        </a-modal>
    </div>
</template>
<script>
import { message } from 'ant-design-vue';
    export default {
        name:'addTemplate',
        data() {
            return {
              test:"lcdc",
                visible: false,
                confirmLoading: false,
                newTemplate:{type:'',name:'',content:''}
            };
        },
        methods: {
            //显示模态框
            showModal() {
                this.visible = true;
            },
            //点击ok
            handleOk() {
                this.confirmLoading = true;
                setTimeout(() => {
                  this.visible = false;
                    this.confirmLoading = false;
                  message.info('添加成功！')
                }, 1000);
            },
            handleCancel() {
                setTimeout(() => {
                    this.visible = false;
                    this.confirmLoading = false;
                }, 1000);
            },
        },
    };
</script>
<style lang="scss" scoped>
/deep/ .ant-modal-content{
  width: 705px;
	height: 512px;
	background-color: #ffffff;
	border-radius: 5px;
	border: solid 1px #a9c4df;

}
      .sms{
        width:621px;
        margin: 0 auto;
        margin-top: 25px;
        span{
          width: 80px;
          line-height: 34px;
          padding-right: 10px;
          display: inline-block;
          text-align: right;
        }
        p{
          line-height: 28px;
          font-size: 12px;
          color: #f68a3b;
          margin-left: 80px;
          margin-bottom: 0;
        }
        input,select,textarea{
          height: 34px;
          width: 541px;
          border: solid 1px #d8d7d7;
        }
        .template-content{
          position: relative;
          height: 200px;
          margin-top: 20px;
          textarea{
            height: 200px;
            line-height: 20px;
            font-size: 14px;
            position: absolute;
            left: 80px;
          }
          span{
            position: absolute;
          }
        }

      }
</style>
