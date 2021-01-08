<template>
  <div style="width: 256px">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      :default-selected-keys="['980000000008']"
      :default-open-keys="['980000000008']"
      mode="inline"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in gnflTree" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
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
import { Api } from '@/api/index'
import SubMenu from './SubMenu.vue'
import {
  PieChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue'
export default {
  data () {
    return {
      gnflList: [],
      gnflTree: [],
      collapsed: false
    }
  },
  components: {
    SubMenu,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined
  },
  mounted () {
    this.getGnflList()
  },
  methods: {
    // 根据功能分类列表 递归查询所有的功能分类 并生成一颗树
    getGnflTree (sfflbm = null) {
      const fflbms = []
      this.gnflList.filter((item) => {
        fflbms.push(item.fflbm)
      })
      // 获取根节点的fflbm
      const fflbm = sfflbm
      const copy = this.gnflList
      // 递归
      function tree (fflbm) {
        const arr = []
        copy.filter((item) => {
          return item.fflbm == fflbm
        }).forEach((item) => {
          arr.push({
            ...item,
            children: tree(item.flbm)
          })
        })
        return arr
      }
      this.gnflTree = tree(fflbm)
    },

    toggleCollapsed () {
      this.collapsed = !this.collapsed;
    },

    // 递归遍历所有的功能分类，查询功能分类下所有的功能
    getAllGndy () {
      function ergodic (items) {
        items.forEach((item) => {
          // 这里进行格式转换
          item.title = item.flmc
          item.key = item.flbm
          if(item.children.length != 0){
            // 也获取一遍功能定义，加到children里面
             Api.getGndyList(item.flbm).then((res) => {
              if(res.data.length != 0) {
                res.data.forEach(item => {
                  item.title = item.gnmc
                  item.key = item.gnbm
                });
                item.children = [...item.children, ...res.data]
              }
            })
            ergodic(item.children)
          } else {
            // 请求获取功能定义
            Api.getGndyList(item.flbm).then((res) => {
              if(res.data.length != 0) {
                res.data.forEach(item => {
                  item.title = item.gnmc
                  item.key = item.gnbm
                });
                item.children = [...item.children, ...res.data]
              }
            })
          }
        })
      }
      if (this.gnflTree.length != 0) {
        ergodic(this.gnflTree)
      } else {
        // 直接获取功能就可以了
        Api.getGndyList(this.myGnfl).then((res) => {
          if(res.data.length != 0) {
            res.data.forEach(item => {
              item.title = item.gnmc
              item.key = item.gnbm
            });
            this.gnflTree = [...this.gnflTree, ...res.data]
          }
        })
      }
    },

    // 获取功能分类列表 然后获取所有数据
    getGnflList () {
      Api.getGnflList().then((res) => {
        this.gnflList = res.data
        this.getGnflTree()
        this.getAllGndy()
      })
    }
  }
}
</script>

<style>

</style>