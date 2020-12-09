<template>
  <a-table class="a-table" :columns="columns" :data-source="data"
    :pagination='pagination'
    size="middle"
    tableLayout='fixed'
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
    title: '代码',
    dataIndex: 'col1',
    key: 'col1'
  },
  {
    title: '名称',
    dataIndex: 'col2',
    key: 'col2'
  },
  {
    title: '说明',
    dataIndex: 'col3',
    key: 'col3',
    width: '50%',
    align: 'center'
  }
]

const dataCol = () => {
  const arr = []
  for (let i = 0; i < 500; i++) {
    arr.push({
      key: i,
      col1: '926313132323232',
      col2: '反贪污贿赂部门',
      col3: ''
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
      defaultPageSize: 10,
      showTotal: (total: number) => `共 ${total} 条数据`,
      showQuickJumper: true,
      position: 'bottom'
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
  height: 100%;
  /deep/ .ant-pagination {
    bottom: 15px;
    right: 30px;
    position: fixed;
  }
}
</style>
