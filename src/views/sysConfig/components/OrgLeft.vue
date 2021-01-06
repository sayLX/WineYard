<template>
  <div class="title">
    <span class="text">组织机构</span>
  </div>
  <div class="input">
    <el-input
      placeholder="请输入查询关键字"
      size="small"
      v-model="input">
      <template #append>
        <el-button @click="serach" icon="el-icon-search"></el-button>
      </template>
    </el-input>
  </div>
  <div class="list">
    <a-tree @select="clickNode" :tree-data='bmList'></a-tree>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { Api } from '@/api/index'

export default defineComponent({
  emits: ['clickleft'],
  setup (props, ctx) {
    const data = reactive({
      input: '',
      bmList: [],
      fbmbm: null
    })

    // 生成部门树
    const createTree = (fbmbmcopy = null) => {
      const fbmbms = []
      data.bmList.filter(item => {
        fbmbms.push(item.fbmbm)
      })
      const copyList = data.bmList
      function tree(fbmbm) {
        const arr = []
        copyList.filter(item => {
          return item.fbmbm == fbmbm
        }).forEach(item => {
          arr.push({
            ...item,
            title: item.bmmc,
            key: item.bmbm,
            children: tree(item.bmbm)
          })
        })
        if (arr.length != 0) {
          return arr
        }
      }
      data.bmList = tree(fbmbmcopy)
    }

    const getBmList = (fbmbm) => {
      Api.getBmList('', fbmbm).then((res) => {
        if (res['success']) {
          data.bmList = res['data']
        }
      }).then(() => {
        createTree(fbmbm)
      }).then(() => {
        // 获取单位信息，拼接数据
        Api.getDwInfo().then(res => {
          if(res['success']) {
            const dwinfo = res['data']
            dwinfo.title = dwinfo['dwqc']
            dwinfo.key = dwinfo['dwbm']
            dwinfo.dwflag = true
            dwinfo.children = data.bmList
            data.bmList = [
              dwinfo
            ]
          }
        })
      })
    }
    const serach = () => {
      // 递归搜索吧。
      const tree = data.bmList
      function digui (tree) {
        tree.forEach(item => {
          if(item.bmmc == data.input) {
            data.bmList = [item]
            return
          }
          if(item.children) {
            digui(item.children)
          }
        })
      }
      if(data.input != '') {
        digui(tree)
      } else {
        getBmList(data.fbmbm)
      }
    }
    
    const clickData = reactive({
      bm: '',
      isdw: true
    })
    // 点击节点
    const clickNode = (selectedKeys, e: { selected: boolean; selectedNodes; node; event } ) => {
      if (e.selectedNodes[0]['props']['dwflag']){
        clickData.bm = e.selectedNodes[0]['props']['dwbm']
        clickData.isdw = true
      } else {
        clickData.bm = e.selectedNodes[0]['props']['bmbm']
        clickData.isdw = false
      }
      ctx.emit('clickleft', clickData)
    }

    onMounted(() => {
      getBmList(data.fbmbm)
    })

    return {
      ...toRefs(data),
      serach,
      clickNode
    }
  }
})
</script>

<style lang='scss' scoped>
.title {
    height: 30px;
    font-size: 12px;
    padding: 0 5px;
    line-height: 30px;
    border-bottom: 0.5px solid#e2e2e2;
    .text {
      padding: 5px 5px;
      border-bottom: 2px solid #28a2fd;
    }
  }
  .input {
    padding: 0 5px;
    .el-input {
      margin-top: 5px;
      height: 30px;
    }
  }
  .list {
    .item {
      height: 35px;
      margin: 0 5px;
      line-height: 35px;
      padding-left: 10px;
      border-bottom: 0.5px solid#e2e2e2;
    }
    .item:hover {
      background: #eee;
    }
  }
</style>