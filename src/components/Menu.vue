<template>
    <div class="title"></div>
        <div class="ctx">
            <div class="left">
                <a-menu
                mode="inline"
                :openKeys="openKeys"
                theme="light"
                v-model:selectedKeys="selectedKeys"
                @openChange="onOpenChange"
                @click="clickItem"
                class="l-menu"
                >
                <a-sub-menu key="sub1">
                    <template #title>
                    <span><MailOutlined /><span>主页</span></span>
                    </template>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                    <span><SettingOutlined /><span>案件信息公开</span></span>
                    </template>
                    <a-menu-item key="1">案件信息公开导入</a-menu-item>
                    <a-menu-item key="2">辩护代理信息导入</a-menu-item>
                    <a-menu-item key="3">辩护代理绑定</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3">
                    <template #title>
                    <span><SettingOutlined /><span>短信操作</span></span>
                    </template>
                    <a-menu-item key="4">本院通知</a-menu-item>
                    <a-menu-item key="5">自定义短信</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub4">
                    <template #title>
                    <span><SettingOutlined /><span>查询系统</span></span>
                    </template>
                    <a-menu-item key="sendQuery">发送记录查询</a-menu-item>
                    <a-menu-item key="sendStatistics">发送记录统计</a-menu-item>
                    <a-menu-item key="leadingIn">导入记录统计</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub5">
                    <template #title>
                    <span><SettingOutlined /><span>基础数据管理</span></span>
                    </template>
                    <a-menu-item key="9">短信模板</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub6">
                    <template #title>
                    <span><SettingOutlined /><span>人员信息管理</span></span>
                    </template>
                    <a-menu-item key="lawyer">律师管理</a-menu-item>
                    <a-menu-item key="11">单位人员管理</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub7">
                    <template #title>
                    <span><SettingOutlined /><span>系统配置</span></span>
                    </template>
                    <a-menu-item key="user">用户管理</a-menu-item>
                    <a-menu-item key="organization">组织机构</a-menu-item>
                    <a-menu-item key="dictionary">数据字典</a-menu-item>
                    <a-menu-item key="function">功能管理</a-menu-item>
                </a-sub-menu>
                </a-menu>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
      </div>
</template>

<script lang='ts'>
import { MailOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
interface MenuData {
    key: string;
    keyPath: string[];
    item: object;
    domEvent: object;
}
export default defineComponent({
  components: {
    MailOutlined,
    SettingOutlined
  },
  setup () {
    const menu = reactive({
      rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7'],
      openKeys: ['sub2'],
      selectedKeys: []
    })
    const onOpenChange = (openKeys: string[]) => {
      const latestOpenKey: string | undefined = openKeys.find((key: string) => menu.openKeys.indexOf(key) === -1)
      console.log(latestOpenKey)
      if (menu.rootSubmenuKeys.indexOf(latestOpenKey as string) === -1) {
        menu.openKeys = openKeys
      } else {
        menu.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
    const router = useRouter()
    const clickItem = (e: MenuData) => {
      console.log(e)
      const url = e.key
      router.push({
        name: url
      })
    }
    return {
      ...toRefs(menu),
      onOpenChange,
      clickItem
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
    width: 100%;
    height: 64px;
    background-color: #1879c4;
}
.ctx {
    flex: 1;
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
</style>
