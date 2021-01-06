<template>
  <div class="ctx">
        <div class="body">
            <page-title title="功能管理"></page-title>
            <div class="form">
                <a-form
                    layout="inline"
                >
                  <a-form-item label="功能名称" name="name">
                      <div class="input">
                        <a-input placeholder="请输入" v-model:value="myGnmc">
                                </a-input>
                      </div>
                  </a-form-item>
                  <a-form-item label="所属类别" name="region">
                      <div  class="input">
                        <a-select placeholder="请选择" @change='checkGnfl'>
                            <a-select-option :value="null">
                              全部
                            </a-select-option>
                            <a-select-option :value="item.flbm" v-for="item in dropdownList" :key="item.flbm">
                              {{item.flmc}}
                            </a-select-option>
                        </a-select>
                      </div>
                  </a-form-item>
                  <a-form-item>
                      <a-button type="primary" @click="serach">
                          <template #icon><SearchOutlined /></template>查询
                      </a-button>
                  </a-form-item>
                  <a-form-item>
                      <a-button type="primary" @click="showModal">
                          添加功能分类
                      </a-button>
                  </a-form-item>
                </a-form>
            </div>
            <div class="table">
              <fun-table :col="columns" :list="list" :size="10" :showCol8='true' :tableColor="false" @success='itemSuccess'>
              </fun-table>
            </div>
            <a-modal
              title="添加功能分类"
              :visible="visible"
              :confirm-loading="confirmLoading"
              @ok="handleOk"
              @cancel="handleCancel"
            >
              <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-form-item label="分类名称">
                  <a-input v-model:value="addFlmc"
                  />
                </a-form-item>
                <a-form-item label="选择父分类" name="region">
                      <div  class="input">
                        <a-select placeholder="请选择" @change='addcheckGnfl'>
                            <a-select-option :value="null">
                              无
                            </a-select-option>
                            <a-select-option :value="item.flbm" v-for="item in dropdownList" :key="item.flbm">
                              {{item.flmc}}
                            </a-select-option>
                        </a-select>
                      </div>
                  </a-form-item>
              </a-form>
            </a-modal>
        </div>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import FunTable from './component/FunTable.vue'
import TestData from '@/utils/testdata'
import { message } from 'ant-design-vue';
import { Api } from '@/api/index'
export default defineComponent({
  name: '',
  components: {
    PageTitle,
    SearchOutlined,
    FunTable
  },
  setup () {
    const data = reactive({
      gnflList: [],
      myGnfl: null,
      myGnmc: '',
      gnflTree: [],
      dropdownList: [],
      addmyGnfl: null
    })
    const list = computed(() => {
      return data.gnflTree
    })
    // 根据功能分类列表 递归查询所有的功能分类 并生成一颗树
    const getGnflTree = (sfflbm = null) => {
      const fflbms = []
      data.gnflList.filter((item) => {
        fflbms.push(item.fflbm)
      })
      // 获取根节点的fflbm
      const fflbm = sfflbm
      const copy = data.gnflList
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
      data.gnflTree = tree(fflbm)
    }
    // 递归遍历所有的功能分类，查询功能分类下所有的功能
    const getAllGndy = () => {
      function ergodic (items) {
        items.forEach((item) => {
          // 这里进行格式转换
          item.col1 = item.flmc
          item.key = item.flbm
          if(item.children.length != 0){
            // 也获取一遍功能定义，加到children里面
             Api.getGndyList(item.flbm).then((res) => {
              if(res.data.length != 0) {
                res.data.forEach(item => {
                  item.col1 = item.gnxh
                  item.col2 = item.gnmc
                  item.col3 = item.gnxsmc
                  item.col4 = item.gndz
                  item.col5 = item.gncs
                  item.col6 = item.gntb
                  item.col7 = item.gnsm
                  item.col8 = '编辑 删除'
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
                  item.col1 = item.gnxh
                  item.col2 = item.gnmc
                  item.col3 = item.gnxsmc
                  item.col4 = item.gndz
                  item.col5 = item.gncs
                  item.col6 = item.gntb
                  item.col7 = item.gnsm
                  item.col8 = '编辑 删除'
                  item.key = item.gnbm
                });
                item.children = [...item.children, ...res.data]
              }
            })
          }
        })
      }
      if (data.gnflTree.length != 0) {
        ergodic(data.gnflTree)
      } else {
        // 直接获取功能就可以了
        Api.getGndyList(data.myGnfl).then((res) => {
          if(res.data.length != 0) {
            res.data.forEach(item => {
              item.col1 = item.gnxh
              item.col2 = item.gnmc
              item.col3 = item.gnxsmc
              item.col4 = item.gndz
              item.col5 = item.gncs
              item.col6 = item.gntb
              item.col7 = item.gmsm
              item.col8 = '编辑 删除'
              item.key = item.gnbm
            });
            data.gnflTree = [...data.gnflTree, ...res.data]
          }
        })
      }
    }
    // 获取功能分类列表 然后获取所有数据
    const getGnflList = () => {
      Api.getGnflList().then((res) => {
        data.gnflList = res.data
        data.dropdownList = res.data
        getGnflTree()
        getAllGndy()
      })
    }
    // 选择功能分类
    const checkGnfl = (value) => {
      data.myGnfl = value
    }
    const addcheckGnfl = (value) => {
      data.addmyGnfl = value
    }
    // 查询
    const serach = () => {
      if ( data.myGnfl != null && data.myGnmc == '' ){
        // 根据分类编码查询功能分类
        Api.getGnflListByFflbm(data.myGnfl).then((res) => {
          if(res.data.length != 0) {
            // 下面还有子分类
            data.gnflList = res.data
            getGnflTree(data.myGnfl)
            getAllGndy()
          }
          else {
            // 下面没有子分类了
            Api.getGnflInfo(data.myGnfl).then((res) => {
              data.gnflList = [res.data]
              data.gnflList[0].children = []
              getGnflTree(data.myGnfl)
              getAllGndy()
            })
          }
        })
      }
      if (data.myGnmc != '') {
        Api.getGndyByName(data.myGnmc).then((res) => {
          if(res.data.length != 0) {
            res.data.forEach(item => {
              item.col1 = item.gnxh
              item.col2 = item.gnmc
              item.col3 = item.gnxsmc
              item.col4 = item.gndz
              item.col5 = item.gncs
              item.col6 = item.gntb
              item.col7 = item.gmsm
              item.col8 = '编辑 删除'
              item.key = item.gnbm
            });
            data.gnflTree = [...res.data]
          }
          else {
            data.gnflTree = []
          }
        })
      }
      if (data.myGnmc != '' && data.myGnfl != null) {
        Api.getGndyByNameAndFlbm(data.myGnmc, data.myGnfl).then((res) => {
          if(res.data.length != 0) {
            res.data.forEach(item => {
              item.col1 = item.gnxh
              item.col2 = item.gnmc
              item.col3 = item.gnxsmc
              item.col4 = item.gndz
              item.col5 = item.gncs
              item.col6 = item.gntb
              item.col7 = item.gmsm
              item.col8 = '编辑 删除'
              item.key = item.gnbm
            });
            data.gnflTree = [...res.data]
          }else {
            data.gnflTree = []
          }
        })
      }
      if (data.myGnfl == null && data.myGnmc == '') {
        getGnflList()
      }
    }
    // 初始查询所有
    onMounted(() => {
      getGnflList()
    })
    //对话框的数据
    const modalData = reactive({
      visible: false,
      confirmLoading: false,
      addFlmc: ''
    })
    const showModal = () => {
      modalData.visible = true;
    }
    const handleOk = () => {
      // 添加功能分类
      modalData.confirmLoading = true;
      console.log(data.addmyGnfl)
      if (modalData.addFlmc != '' && data.addmyGnfl == null) {
        Api.addGnfl({flmc: modalData.addFlmc}).then((res) => {
          if ( !res['success'] ) {
            message.error(res['message'])
          } else {
            modalData.confirmLoading = false;
            modalData.visible = false;
            setTimeout(() => {
              getGnflList()
            },1000)
          }
        })
      } else if (modalData.addFlmc != '' && data.addmyGnfl != null) {
        Api.addGnfl({flmc: modalData.addFlmc, fflbm: data.addmyGnfl}).then((res) => {
          if ( !res['success'] ) {
            message.error(res['message'])
          } else {
            modalData.confirmLoading = false;
            modalData.visible = false;
            setTimeout(() => {
              getGnflList()
            },1000)
          }
        })
      } else {
        message.error('功能名称不能为空');
        modalData.confirmLoading = false;
      }
    }
    const handleCancel = () => {
      console.log('Clicked cancel button');
      modalData.visible = false;
    }
    const itemSuccess = () => {
      setTimeout(() => {
        getGnflList()
      },1000)
    }
    return {
      columns: TestData.FunOrg.columns,
      list,
      ...toRefs(data),
      getGnflList,
      checkGnfl,
      modalData,
      showModal,
      handleOk,
      handleCancel,
      serach,
      ...toRefs(modalData),
      itemSuccess,
      addcheckGnfl
    }
  }
})
</script>

<style lang='scss' scoped>
.ctx {
    width: 100%;
    height: 100%;
    position: relative;
    .body {
        position: absolute;
        left: 11px;
        right: 11px;
        top: 12px;
        bottom: 12px;
        border: solid 1px #d8d7d7;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .form {
          padding: 5px 20px;
          .input {
            width: 250px;
          }
        }
        .table {
          flex: 1;
          padding: 5px;
        }
    }
}
</style>
