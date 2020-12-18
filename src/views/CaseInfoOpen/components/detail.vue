<template>
  <div id="floatBox">
    <a-button type="primary" @click="showModal"> 详情 </a-button>
    <a-modal
      title="张三涉嫌故意伤害——张三"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      width="754px"
    >
      <div>
        <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>犯罪嫌疑人/被告人信息</span>
            </template>
            <a-menu-item key="sub1">
              <table>
                <tbody>
                  <tr
                    v-for="(Key, index) in Object.keys(detailForm)"
                    :key="index"
                  >
                    <td class="name">{{ itemName[Key] }}</td>
                    <td class="value">{{ detailForm[Key] }}</td>
                  </tr>
                  <!-- <tr>
                <td class="name">性别</td><td class="value">男</td>
              </tr>
              <tr>
                <td class="name">证件类型</td><td class="value"> 居民身份证</td>
              </tr>
              <tr>
                <td class="name">证件号码</td><td class="value">11111111111111</td>
              </tr>
                <tr>
                 <td class="name">承办单位编码</td><td class="value">成都</td>
                </tr>
              <tr>
                <td class="name">案由</td><td class="value">睡觉</td>
              </tr> -->
                  <!-- <tr>
                <td class="name">当前强制措施</td><td class="value">拘留</td>
                <td class="name">当前强制措施日期</td><td class="value">2020-10-10</td>
              </tr> -->
                </tbody>
              </table>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>二审上诉</span>
            </template>
            <a-menu-item key="1">
              <table>
                <tbody border="1">
                  <tr>
                    <td class="name">姓名</td>
                    <td class="value">张三</td>
                    <td class="name">性别</td>
                    <td class="value">男</td>
                  </tr>
                  <tr>
                    <td class="name">证件类型</td>
                    <td class="value">居民身份证</td>
                    <td class="name">证件号码</td>
                    <td class="value">11111111111111</td>
                  </tr>
                  <tr>
                    <td class="name">当前强制措施</td>
                    <td class="value">拘留</td>
                    <td class="name">当前强制措施日期</td>
                    <td class="value">2020-10-10</td>
                  </tr>
                  <tr>
                    <td class="name">当前羁押场所</td>
                    <td class="value">成都</td>
                    <td class="name">案由</td>
                    <td class="value">睡觉</td>
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
import { Api } from '@/api/index'
export default {
  data() {
    return {
      visible: false,
      confirmLoading: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      ajrybh:'1002',
      itemName: {
        xm: '姓名',
        xb: '性别',
        zjlx: '证件类型',
        zjhm: '证件号码',
        cbdwbm: '承办单位编码',
        ay: '案由',
      },
      detailForm: {
        xm: '',
        xb: '',
        zjlx: '',
        zjhm: '',
        cbdwbm: '',
        ay: '',
      },
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    }
  },
  methods: {
    //显示模态框
    showModal() {
      this.visible = true
      this.getDetail(this.ajrybh)
    },
    getDetail(ajrybh){
      Api.viewDetail(ajrybh).then(res=>{
        console.log(res)
        console.log("收到了")
      })
        console.log("正在发起---")

    },
    //点击ok
    handleOk() {
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 10)
    },
    //点击cancel
    handleCancel() {
      this.visible = false
    },
    onSubmit() {
      //
    },
  },
}
</script>
<style lang="scss" scoped>
/deep/ .ant-menu-submenu {
  background-color: #f8f8fa;
  .ant-menu-submenu {
    height: 42px;
    padding-bottom: 0;
    font-weight: bold;
    .ant-menu-submenu-arrow {
      left: 10px;
    }
  }
  .ant-menu-submenu-title {
    border: 1px solid rgb(237, 238, 242);
    border-bottom: none;
  }
  .ant-menu-item::after {
    content: '';
    border: none;
  }
  .ant-menu-item {
    height: 250px;
    padding: 0 !important;
    margin-top: -4px;

    background-color: #fff;
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
      // margin-left: -48px;
      // margin-bottom: 12px;
      .name {
        width: 40%;
        padding-right: 13px;
        color: #666666;
        text-align: right;
        border: 1px solid rgb(237, 238, 242);
      }
      .value {
        width: 60%;
        padding-left: 21px;
        color: #333333;
        border: 1px solid rgb(237, 238, 242);
      }
    }
  }
}
</style>
