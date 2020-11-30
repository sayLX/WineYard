<template>
  <a-table :columns="columns" :data-source="data" :pagination='{pageSize: 9}'>
    <template #name="{text}">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '短信模板名称',
    dataIndex: 'infoName',
    key: 'infoName'
  },
  {
    title: '接收人姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '接收人电话号码',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '发送时间',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: '发送结果',
    dataIndex: 'result',
    key: 'result'
  },
  {
    title: '短信内容',
    dataIndex: 'ctx',
    key: 'ctx'
  },
  {
    title: '操作',
    dataIndex: 'options',
    width: '20%',
    key: 'options',
    align: 'center'
  }
]

const data = [
  {
    key: '1',
    infoName: '自定义模板',
    name: '张三',
    phone: 110,
    time: '2020-11-27',
    result: '成功',
    ctx: '你好',
    options: '详情'
  },
  {
    key: '1',
    infoName: '自定义模板',
    name: '张三',
    phone: 110,
    time: '2020-11-27',
    result: '成功',
    ctx: '你好',
    options: '详情'
  },
  {
    key: '1',
    infoName: '自定义模板',
    name: '张三',
    phone: 110,
    time: '2020-11-27',
    result: '成功',
    ctx: '你好',
    options: '详情'
  },
  {
    key: '1',
    infoName: '自定义模板',
    name: '张三',
    phone: 110,
    time: '2020-11-27',
    result: '成功',
    ctx: '你好',
    options: '详情'
  },
  {
    key: '1',
    infoName: '自定义模板',
    name: '张三',
    phone: 110,
    time: '2020-11-27',
    result: '成功',
    ctx: '你好',
    options: '详情'
  },
  {
    key: '1',
    infoName: '自定义模板',
    name: '张三',
    phone: 110,
    time: '2020-11-27',
    result: '成功',
    ctx: '你好',
    options: '详情'
  }
]

export default {
  data () {
    return {
      data,
      columns
    }
  }
}
</script>
