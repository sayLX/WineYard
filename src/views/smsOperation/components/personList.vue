<template>
  <div class="person-list">
    <a-row class="list-head list-item" style="font-weight: bold">
      <a-col
        :span="item.span"
        v-for="(item, index) in itemName"
        :key="index"
        :class="item.key"
        >{{ item.value }}</a-col
      >
    </a-row>
    <a-row class="list-item" v-for="(item, index1) in personList" :key="index1">
      <a-col :span="2">{{ item['xh'] }}</a-col>
      <a-col :span="2">{{ item['dlbm'] }}</a-col>
      <a-col :span="3">{{ item['xb'] }}</a-col>
      <a-col :span="4">{{ item['gzzh'] }}</a-col>
      <a-col :span="4">{{ item['dhhm'] }}</a-col>
      <a-col :span="4">{{ item['dzyj'] }}</a-col>
      <a-col :span="3"><a href="" @click="sendSMS">发送</a></a-col
      >
    </a-row>
  </div>
</template>

<script>
import { Api } from '@/api/index.ts'
import { message } from 'ant-design-vue'
export default {
  props: ["personList"],
  data() {
    return {
          // 获取列表的请求数据
     getOrganizationData :{
      curent: 1,
      gzhh: '',
      mc: '',
      orders: { asc: true, column: '' },
      size: 10,
    },
      itemName: [
        { key: 'xh', value: '序号', span: '2' },
        { key: 'xb', value: '性别', span: '2' },
        { key: 'dlbm', value: '登录别名', span: '3' },
        { key: 'gzzh', value: '工作证号', span: '4' },
        { key: 'dhhm', value: '电话号码', span: '4' },
        { key: 'dzyj', value: '电子邮件', span: '4' },
        { key: 'cz', value: '操作', span: '2' },
      ],
      total:""
    }
  },
  methods: {
        // 获取人员列表，并将性别"1""0"分别转化成"男"""女"
    getPersonList(getOrganizationData){
      Api.getOrganization(getOrganizationData).then((res) => {
        console.log(res.data.entities)
        personList = res.data.entities.map((item) => {
          if (item.xb == '0') item.xb = '女'
          else item.xb = '男'
          return item
        })
        this.total = res.data.total
      })
    },
    sendSMS(){
      message.success("短信发送成功")
    }
  },
}
</script>
<style lang='scss' scoped>
</style>
