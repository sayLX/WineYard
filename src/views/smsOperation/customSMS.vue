<template>
  <div class="ctx">
    <div class="body">
      <Title title="自定义短信"></Title>
      <div class="content">
        <div class="model-title">
          <span>编辑短信</span>
        </div>
        <div class="sms">
          <div class="receiver">
            <span>接收人</span>
            <input type="text" class="receiver" placeholder="请输入">
            <p>注：可勾选右侧律师、本院人员、亦可手工录入联系人及电话号码、格式：李某&lt;12345666262&gt;</p>
          </div>
          <div class="sms-template">
            <span>短信模板</span>
            <select name="" id="sms-template">
              <option disabled>请选择模板</option>
              <option v-for="(templateName,index) in template" :key="index">{{templateName}}</option>
            </select>
          </div>
          <div class="template-content">
            <span class="template-title">模板内容</span>
            <textarea cols="10" placeholder="请输入短信内容" v-model="templateContent" ></textarea>
          </div>
          <p>注：如果短信内容超过140个字符，将分多个短信发送</p>
          <div class="btns">
            <button class="send">发送</button>
            <button class="reset" @click="resetTemplateContent">重置</button>
          </div>
        </div>
      </div>

      <div class="right-list">
        <div class="model-title">
          <span>编辑短信</span>
          <span class="notice"> (双击查看详情信息)</span>
        </div>
        <div class="right-nav" >
          <ul class="receiver-type">
            <li id="lawyer" tabindex="1" @click='changeResult($event)'>律师</li>
            <li id="staff" tabindex="2"  @click='changeResult($event)'>人员</li>
          </ul>
          <div class="searchStaff">
            <div class="search-wrapper">
              <input type="text" placeholder="请输入查询关键字">
              <i class="fa fa-search"></i>
            </div>
            <div class="seaech-result">
              <a-collapse v-model:activeKey="activeKey" :bordered="false">
                <template #expandIcon="{ isActive }">
                  <caret-right-outlined :rotate="isActive ? 90 : 0" />
                </template>
                <a-collapse-panel key="1" :header="'全部'+receiver" :style="customStyle">
                  <ul class="receivers">
                    <li v-for="(name,index) in Object.keys(lawyerList)" :key="index" :tabindex="index">
                      <i class="fa fa-file-alt" style="color:#666"></i>&nbsp;&nbsp;{{name}}&lt;{{lawyerList[name]}}&gt;
                    </li>
                  </ul>
                </a-collapse-panel>
            </a-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Title from './components/Title.vue'
import { CaretRightOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'customSMS',
  components: {
    Title,
    CaretRightOutlined,

  },
  data () {
    return {
      value:'',
      template:['模板1','模板2'],
      templateContent:'',
      tabPosition: 'left',
      activeKey: ['1'],
      receiverList:[],
      receiver:'律师',
      lawyerList:{"张三":13252524569,"李四":13252963269},
      staffList:[],
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
        'background: #fff;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
    };
  },
  methods: {
    onSearch() {
      console.log('use value'+ this.value);
    },
    changeResult(e){
      this.receiver=e.currentTarget.innerHTML
    },
    resetTemplateContent(){
      this.templateContent=''
    }
  },
})
</script>

<style lang="scss" scoped>
    //每个模块顶部标题
    .model-title{
      width: 100%;
      border-bottom: solid 1px #d8d7d7;
      span{
        display: inline-block;
        margin-left: 15px;
        line-height: 38px;
        font-weight: bold;
        border-bottom: 3px solid rgb(40,162,253);
      }
      // 右边列表区标题旁文字
      .notice{
        color: #f68a3b;
        border-bottom: none;
        cursor: pointer;
      }
    }
    // 中间内容区
    .content{
      width: calc(80% - 30px);
      height: calc(100% - 51px);
      float: left;
      margin-left: 10px;
      border: solid 1px #d8d7d7;
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
        .btns{
          margin-left: 80px;
          margin-top: 49px;
          button{
            width: 110px;
            height: 34px;
            background-color:#1890ff;
            border: none;
            border-radius: 3px;

          }
          .reset{
            background-color: #c4dcf4;
            margin-left: 15px;
          }
        }

      }
    }
    // 右边列表区
    .right-list{
      width: 20%;
      height: calc(100% - 51px);
      float: right;
      margin-right: 10px;
      border: solid 1px #d8d7d7;
      .right-nav{
        height: calc(100% - 51px);
        width: 100%;
        margin-top: 25px;
        border-top: 1px solid #d8d7d7;
        display: flex;
        // 律师、人员栏
        .receiver-type{
          width: 38px;
          list-style: none;
          li{
            font-size: 14px;
            padding: 11px;
            border-right: 1px solid#d8d7d7;
            border-bottom: 1px solid#d8d7d7;
          }
          li:focus{
            background-color: #fff;
            outline: none;
            border-right: none;
          }
          #lawyer{
          width: 37px;
          height: 73px;
          }
          #staff{
            width: 37px;
            height: calc(100% - 73px);
          }

          background-color: rgb(243,243,243);
        }
        // 搜索框及搜索结果
        .searchStaff{
          width: 100%;
          .search-wrapper{
            width: 100%;
            height: 60px;
            padding: 12px;
            position: relative;
            input{
              width: 100%;
              height: 34px;
              border: 1px solid #d8d7d7;
              border-radius: 4px;
            }
            i{
              top: 24px;
              right:26px;
              font-size: 14px;
              position: absolute;
            }
          }
          .seaech-result{
            li{
              margin-left: 27px;
              list-style: none;
              color: #666;
              cursor: pointer;

              &:focus{
                outline: none;
                background-color: rgb(217,217,217);
              }
            }
          }
        }

      }
    }
</style>
