<template>
  <a-table class="a-table" :columns="columns" :data-source="data"
    :pagination='pagination'
    size="middle"
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
  }
]

const dataCol = () => {
  const arr = []
  for (let i = 0; i < 500; i++) {
    arr.push({
      key: '1',
      infoName: '自定义模板',
      name: '张三',
      phone: 110
    })
  }
  return arr
}

export default defineComponent({
  setup () {
    const rowClassName = (record: object, index: number): string => {
      const className = index % 2 === 0 ? 'shallow_gray' : 'deep_gray'
      return className
    }
    const pagination = {
      defaultPageSize: 13,
      showTotal: (total: number) => `共 ${total} 条数据`,
      showQuickJumper: true
    }
    const data = dataCol()
    return {
      data,
      columns,
      rowClassName,
      pagination
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
