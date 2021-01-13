<template>
  <a-button type="primary" @click="showModal" style="margin-left:10px">
    <template #icon><PlusOutlined /></template>{{ title }}
  </a-button>
  <a-modal
    :title="title"
    :visible="visible"
    ok-text="确定"
    @ok="handleOk"
    @cancel="handleCancel"
    width="740px"
  >
    <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-form-item label="选择功能权限" name="region">
        <div class="input">
          <a-select v-model:value="value" mode="tags" style="width: 100%">
            <a-select-option
              v-for="(item, index) in gnList"
              :key="index"
              v-model:value="item['gnbm']"
            >
              {{ item['gnmc'] }}
            </a-select-option>
          </a-select>
        </div>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
import { PlusOutlined } from '@ant-design/icons-vue'
import { Api } from '@/api/index.ts'
import { message } from 'ant-design-vue'
export default {
  name: 'addTemplate',
  components: {
    PlusOutlined,
  },
  props: ['title', 'roleInfo'],
  data() {
    return {
      visible: false,
      gnflList: [],
      gnList: [],
      value: [],
    }
  },

  methods: {
    //显示模态框
    showModal() {
      this.visible = true
      // this.queryRoleRight()
      this.getGnList()
    },

    // 获取功能列表
    getGnList() {
      // 获取功能分类列表
      Api.getGnflList().then((res) => {
        this.gnflList = res.data
        // 获取功能权限列表
        this.gnflList.forEach((item) => {
          Api.getGndyList(item['flbm']).then((res) => {
            if (res.success) {
              this.gnList = this.gnList.concat(res.data)
            }
          })
        })
      })
    },

    // 获取角色权限
    // queryRoleRight() {
    //   Api.queryRight(this.roleInfo).then((res1) => {
    //     res1.data.forEach((item) => {
    //       Api.getGndy(item.gnbm).then((res2) => {
    //         this.value.push(res2.data.gnmc)
    //       })
    //     })
    //   })
    // },

    //点击确定


    handleOk() {
      const mydata = []
      // this.value=[]
      Object.values(this.value).forEach((item) => {
        mydata.push(Object.assign({}, this.roleInfo, { gnbm: item }))
      })
      Api.editRight(mydata).then((res) => {
        res.success && message.success('编辑成功！')
        this.visible = false
      })
    },

    // 点击取消
    handleCancel() {
      setTimeout(() => {
        this.visible = false
      }, 100)
    },
  },
}
</script>
<style lang="scss" scoped>
/deep/ .ant-modal-content {
  width: 705px;
  height: 512px;
  background-color: #ffffff;
  border-radius: 5px;
  border: solid 1px #a9c4df;
}
.sms {
  width: 621px;
  margin: 0 auto;
  margin-top: 25px;
  span {
    width: 100px;
    line-height: 34px;
    padding-right: 10px;
    display: inline-block;
    text-align: right;
  }
  input,
  select {
    height: 34px;
    width: 400px;
    border: solid 1px #d8d7d7;
  }
}
</style>
