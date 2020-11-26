<template>
  <div id="app">
        <div class="title"></div>
        <div class="ctx">
            <div class="left">
                <a-menu
                mode="inline"
                :openKeys="openKeys"
                theme="light"
                v-model:selectedKeys="selectedKeys"
                @openChange="onOpenChange"
                class="l-menu"
                >
                <a-sub-menu key="sub1">
                    <template #title>
                    <span><MailOutlined /><span>主页</span></span>
                    </template>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                    <span><AppstoreOutlined /><span>案件信息公开</span></span>
                    </template>
                    <a-menu-item key="1">用户管理</a-menu-item>
                    <a-menu-item key="2">组织机构</a-menu-item>
                    <a-menu-item key="4">数据字典</a-menu-item>
                    <a-menu-item key="5">功能管理</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3">
                    <template #title>
                    <span><SettingOutlined /><span>基础数据管理</span></span>
                    </template>
                    <a-menu-item key="6">短信模板</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub4">
                    <template #title>
                    <span><SettingOutlined /><span>短信操作</span></span>
                    </template>
                    <a-menu-item key="7">本院通知</a-menu-item>
                    <a-menu-item key="8">自定义短信</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub5">
                    <template #title>
                    <span><SettingOutlined /><span>案件信息公开</span></span>
                    </template>
                    <a-menu-item key="9">案件信息公开导入</a-menu-item>
                    <a-menu-item key="10">辩护代理信息导入</a-menu-item>
                    <a-menu-item key="11">辩护代理绑定</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub6">
                    <template #title>
                    <span><SettingOutlined /><span>人员管理</span></span>
                    </template>
                    <a-menu-item key="12">律师管理</a-menu-item>
                    <a-menu-item key="13">单位人员管理</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub7">
                    <template #title>
                    <span><SettingOutlined /><span>查询系统</span></span>
                    </template>
                    <a-menu-item key="14">发送记录查询</a-menu-item>
                    <a-menu-item key="15">发送记录统计</a-menu-item>
                    <a-menu-item key="16">导入记录统计</a-menu-item>
                </a-sub-menu>
                </a-menu>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
      </div>
  </div>
</template>
<script lang='ts'>
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined
  },
  data () {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7'],
      openKeys: ['sub1'],
      selectedKeys: []
    }
  },
  methods: {
    onOpenChange (openKeys: string[]) {
      const latestOpenKey: string | undefined = openKeys.find((key: string) => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey as string) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
})
</script>

<style lang="scss" scoped>
#app {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    .title {
        width: 100%;
        height: 64px;
        background-color: #1879c4;
    }
    .ctx {
        display: flex;
        .left {
            width: 220px;
            height: 100%;
            .l-menu {
                width: 100%;
                height: 100%;
            }
        }
        .right {
            flex: 1;
        }
    }
}
</style>
