<template>
  <div style="width: 256px">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      mode="inline"
      :inline-collapsed="collapsed"
      @click="clickItem"
    >
      <a-menu-item key="/homePage">
          <HomeOutlined />
          <span>主页</span>
      </a-menu-item>
      <template v-for="item in this.$store.state['gnflTree']" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.gndz">
            <PieChartOutlined />
            <span>{{ item.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang='ts'>
import SubMenu from './SubMenu.vue'
import {
  PieChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from '@ant-design/icons-vue'

export default {
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    SubMenu,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    HomeOutlined,
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed;
    },
    clickItem (e) {
      const url = e.key;
      console.log(url)
    }
  }
}
</script>

<style>

</style>