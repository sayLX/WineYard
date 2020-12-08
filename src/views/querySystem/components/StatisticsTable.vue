<template>
  <a-table class="a-table" :columns="columns" :data-source="data" :pagination='{pageSize: 5}' size="middle"
    :rowClassName="rowClassName"
  >
    <template #name="{text}">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
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

export default defineComponent({
  setup () {
    const rowClassName = (record: object, index: number): string => {
      const className = index % 2 === 0 ? 'shallow_gray' : 'deep_gray'
      return className
    }
    return {
      data,
      columns,
      rowClassName
    }
  }
})
</script>
<style lang="scss">
.a-table {
  .shallow_gray {
    background-color: #fff;
  }
  .deep_gray {
    background-color: #f8f8fa;
  }
}
</style>
