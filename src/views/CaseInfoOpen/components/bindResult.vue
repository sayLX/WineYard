<template>
  <div id="result">
    <div class="resultTitle">
      <span class="ajgkzt">公开状态</span>
      <span class="ajmc">案件名称</span>
      <span class="ajrybh">案件人员编号</span>
      <span class="ay">案由</span>
      <span class="bmsah">部门受案号</span>
      <span class="cbdwmc">承办单位</span>
      <span class="xb">性别</span>
      <span class="xm">姓名</span>
      <span class="zjhm">证件号码</span>
      <span class="zjlx">证件类型</span>
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
          <span><SettingOutlined /><span>刑事案件</span></span>
        </template>
        <a-menu-item v-for="(item, index1) in ajrylb" :key="index1">
          <span
            v-for="(key, index2) in Object.keys(item)"
            :key="index2"
            :class="key"
          >
            {{ item[key] }}</span
          >
          <BindBox :detail="item"></BindBox>
          <Detail :detail="item"></Detail>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import { SettingOutlined } from '@ant-design/icons-vue'
import BindBox from './bindBox.vue'
import Detail from './detail.vue'

export default {
  name: 'bindResult',
  components: {
    SettingOutlined,
    BindBox,
    Detail,
  },
  props: { ajrylb: Array },
  data() {
    return {
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    }
  },
}
</script>
<style lang="scss" scoped>
.resultTitle {
  padding: 5px 0px 5px 50px;
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
  .zjlx {
    width: 90px;
    margin-left: 40px;
  }
  .zjhm {
    width: 220px;
    margin-left: 40px;
  }
  .ay {
    width: 100px;
  }
  .ajmc {
    width: 190px;
  }
  .cbdwmc {
    width: 100px;
  }
  .ajrybh{
    width:200px}
  .ajgkzt {
    width: 90px;
  }
  .bmsah {
    width: 100px;
  }
  .cz {
    width: 40px;
    margin-left: 40px;
  }
  button,
  button:hover {
    border: none;
    margin-left: 40px;
    background-color: #f8f8fa;
    color: #1890ff;
  }
  button:focus {
    outline: none;
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
      span {
        float: left;
      }
      span:first-child {
        margin-left: 0;
      }
    }
  }
  svg {
    display: none;
  }
}
</style>
