<template>
    <div id="floatBox">
        <a-button type="primary" @click="showModal">
           详情
        </a-button>
        <a-modal
                title="张三涉嫌故意伤害——张三"
                :visible="visible"
                :confirm-loading="confirmLoading"
                @ok="handleOk"
                @cancel="handleCancel"
                width='754px'
        >
        <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span><SettingOutlined /><span>犯罪嫌疑人/被告人信息</span></span>
        </template>
        <a-menu-item key="1" >
          <table>
             <tbody>
              <tr>
                <td class="name">姓名</td><td class="value">张三</td>
                <td class="name">性别</td><td class="value">男</td>
              </tr>
              <tr>
                <td class="name">证件类型</td><td class="value"> 居民身份证</td>
                <td class="name">证件号码</td><td class="value">11111111111111</td>
              </tr>
              <tr>
                <td class="name">当前强制措施</td><td class="value">拘留</td>
                <td class="name">当前强制措施日期</td><td class="value">2020-10-10</td>
              </tr>
              <tr>
                <td class="name">当前羁押场所</td><td class="value">成都</td>
                <td class="name">案由</td><td class="value">睡觉</td>
              </tr>
            </tbody>
          </table>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #title>
          <span><SettingOutlined /><span>二审上诉</span></span>
        </template>
        <a-menu-item key="9">
          <table>
            <tbody border="1">
              <tr>
                <td class="name">姓名</td><td class="value">张三</td>
                <td class="name">性别</td><td class="value">男</td>
              </tr>
              <tr>
                <td class="name">证件类型</td><td class="value"> 居民身份证</td>
                <td class="name">证件号码</td><td class="value">11111111111111</td>
              </tr>
              <tr>
                <td class="name">当前强制措施</td><td class="value">拘留</td>
                <td class="name">当前强制措施日期</td><td class="value">2020-10-10</td>
              </tr>
              <tr>
                <td class="name">当前羁押场所</td><td class="value">成都</td>
                <td class="name">案由</td><td class="value">睡觉</td>
              </tr>
            </tbody>
          </table>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
        </a-modal>
    </div>
</template>
<script>
    export default {
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
                selectedKeys: ['1'],
                openKeys: ['sub1'],

            };
        },
        methods: {
            //显示模态框
            showModal() {
                this.visible = true;
            },
            //点击ok
            handleOk() {
                this.ModalText = 'The modal will be closed after two seconds';
                this.confirmLoading = true;
                setTimeout(() => {
                    this.visible = false;
                    this.confirmLoading = false;
                }, 10);
            },
            //点击cancel
            handleCancel() {
                console.log('Clicked cancel button');
                this.visible = false;
            },
            onSubmit() {
               console.log('submit!', this.form);
    },
        },
    };
</script>
<style lang="scss" scoped>
/deep/ .ant-menu-submenu{
  background-color: #f8f8fa;
    .ant-menu-submenu{
    height: 42px;
    padding-bottom: 0;
      font-weight: bold;
        .ant-menu-submenu-arrow{
          left: 10px;
        }
    }
    .ant-menu-submenu-title{
    border: 1px solid rgb(237,238,242);
    border-bottom:none;

    }
  .ant-menu-item::after{
    content: '';
    border: none;
  }
  .ant-menu-item{
    height: 180px;
    padding: 0 !important;
    margin-top: -4px;



    background-color: #fff;
    table{
      border-collapse: collapse;
      font-size: 14px;
      // margin-left: -48px;
      // margin-bottom: 12px;
      .name{
        width: 153px;
        padding-right: 13px;
        color: #666666;
        text-align: right;
        border: 1px solid rgb(237,238,242);

      }
      .value{
        width: 210px;
        padding-left: 21px;
        color: #333333;
        border: 1px solid rgb(237,238,242);

      }
    }

  }
}
</style>
