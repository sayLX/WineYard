<template>
    <a @click="showModal"> 详情 </a>
    <a-modal
      title="用户详情"
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
</template>
<script>
export default {
  // props: {detail:Object},
  // props: ['detail'],
  data() {
    return {
      // nowtitle: this.detail.ajmc + '———' + this.detail.xm,
      visible: false,
      nowDetail: {},
      detailName: {},
      confirmLoading: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    }
  },
  methods: {
    // 点击详情按钮时
    showModal() {
      // 打开弹出框
      this.visible = true

    },
    //点击确定和取消时关闭弹出框
    handleOk() {
      setTimeout(() => {
        this.visible = false
      }, 10)
    },
    handleCancel() {
      this.visible = false
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
    height: auto;
    padding: 0 !important;
    margin-top: -4px;

    background-color: #fff;
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
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
