<template>
  <div class="body">
    <home-bar></home-bar>
    <div class="ctx">
      <div class="left">
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
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import SubMenu from './SubMenu.vue'
import {
  PieChartOutlined,
  HomeOutlined
} from '@ant-design/icons-vue'

export default {
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    SubMenu,
    PieChartOutlined,
    HomeOutlined,
  },
  methods: {
    clickItem (e) {
      const url = e.key;
      this.$router.push({
        path: url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 1220px;
  .ctx {
    flex: 1;
    display: flex;
    /deep/ .left {
      width: 220px;
      height: 100%;
      // overflow: auto;
      // .l-menu {
      //   width: 100%;
      //   height: 100%;
      //   color: #baedfe;
      //   background-color: rgb(40, 162, 253);
      //   &:hover {
      //     color: #baedfe !important;
      //   }
      //   .ant-menu-item:after{
      //     border: none;
      //   }
      //   .ant-menu {
      //     color: #baedfe;
      //     background-color: rgb(14, 139, 235);
      //   }
      //   .ant-menu-submenu-title {
      //     i {
      //       display: none;
      //     }
      //   }
      // }
    }
    .right {
      flex: 1;
    }
  }
}
</style>
