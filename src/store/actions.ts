import { Api } from '@/api/index'
let gnflList = []
const gnflTree = []
// 根据功能分类列表 递归查询所有的功能分类 并生成一颗树
function getGnflTree (sfflbm = null) {
  const fflbms = []
  gnflList.filter((item) => {
    fflbms.push(item.fflbm)
  })
  // 获取根节点的fflbm
  const fflbm = sfflbm
  // 递归
  function tree (fflbm) {
    const arr = []
    gnflList.filter((item) => {
      return item.fflbm == fflbm
    }).forEach((item) => {
      arr.push({
        ...item,
        children: tree(item.flbm)
      })
    })
    return arr
  }
  gnflTree.push(...tree(fflbm))
}

// 递归遍历所有的功能分类，查询功能分类下所有的功能
function getAllGndy () {
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
  if (gnflTree.length != 0) {
    ergodic(gnflTree)
  }
}

export default {
  login: (ctx) => {
    ctx.commit('login')
  },
  toMenu: async (ctx, list) => {
    gnflList = list
    getGnflTree()
    getAllGndy()
    ctx.commit('toMenu', gnflTree)
  },
}
