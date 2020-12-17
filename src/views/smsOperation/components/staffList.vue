<template>
  <div id="result">
    <div class="resultTitle">
      <span class="xm">姓名</span>
      <span class="xb">性别</span>
      <span class="gzzh">工作证号</span>
      <span class="lxdh">联系电话</span>
      <span class="dzyj">电子邮件</span>
      <span class="cz">操作</span>
    </div>
    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      class="result"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span>&nbsp;&nbsp;&nbsp;公诉(承办人)</span>
        </template>
        <a-menu-item key="1">
          <span
            v-for="(result, index) in resultValues"
            :key="index"
            :class="resultNames[index]"
          >
            {{ result }}
          </span>
        </a-menu-item>
        <a-menu-item key="2">Option 10</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>&nbsp;&nbsp;&nbsp;反贪(承办人)</span>
        </template>
        <a-menu-item key="3">
          <span
            v-for="(result, index) in resultValues"
            :key="index"
            :class="resultNames[index]"
          >
            {{ result }}
          </span>
        </a-menu-item>
        <a-menu-item key="4">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: 'staffList',
  data() {
    return {
      resultNames: ['xm', 'xb', 'gzzh', 'lxdh', 'dzyj', 'cz'],
      resultValues: [
        '张三',
        '男',
        '1111111111111111111',
        '13252163254',
        '11111111111@qq.com',
        '发送',
      ],
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    }
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val)
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e)
    },
    titleClick(e) {
      console.log('titleClick', e)
    },
  },
}
</script>
<style lang="scss" scoped>
.resultTitle {
  padding: 5px 106px 5px 50px;
}
.ant-menu-item,
.resultTitle {
  margin: 0;
  background-color: #f8f8fa;
  border-top: solid 1px #dcdfe6;
  border-bottom: solid 1px #dcdfe6;
  overflow: hidden;
  & > * {
    float: left;
  }
  .xm {
    width: 100px;
  }
  .xb {
    width: 40px;
  }
  .gzzh {
    width: 200px;
    margin-left: 40px;
  }
  .lxdh {
    width: 220px;
    margin-left: 40px;
  }
  .dzyj {
    width: 200px;
  }
  .cz {
    width: 40px;
    margin-left: 40px;
  }
}
/deep/ .result {
  .ant-menu-submenu {
    width: 100%;
    padding-bottom: 0;
    font-size: 12px;
    .ant-menu-submenu-title {
      height: 40px;
      font-weight: bold;
      .ant-menu-submenu-arrow {
        left: 20px;
      }
    }
    .ant-menu-item {
      color: black;
      span {
        float: left;
      }
      span:first-child {
        margin-left: 0;
      }
      span:last-child {
        color: rgb(24, 144, 255);
      }
    }
  }
  svg {
    display: none;
  }
}
</style>
