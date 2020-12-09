<template>
  <a-table class="a-table" :columns="columns" :data-source="data"
    :pagination='pagination'
    size="middle"
    tableLayout='fixed'
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
    title: '功能序号',
    dataIndex: 'col1',
    key: 'col1'
  },
  {
    title: '功能名称',
    dataIndex: 'col2',
    key: 'col2'
  },
  {
    title: '功能显示名称',
    dataIndex: 'col3',
    key: 'col3'
  },
  {
    title: '功能窗体',
    dataIndex: 'col4',
    key: 'col4'
  },
  {
    title: '功能参数',
    dataIndex: 'col5',
    key: 'col5'
  },
  {
    title: '功能图标',
    dataIndex: 'col6',
    key: 'col6'
  },
  {
    title: '功能说明',
    dataIndex: 'col7',
    key: 'col7'
  },
  {
    title: '操作',
    dataIndex: 'col8',
    key: 'col8'
  }
]

const dataCol = () => {
  const arr = []
  for (let i = 0; i < 500; i++) {
    arr.push({
      key: i,
      col1: '926313132323232',
      col2: '反贪污贿赂部门',
      col3: '',
      col4: '',
      col5: '',
      col6: '',
      col7: '',
      col8: ''
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
  .shallow_gray {
    background-color: #fff;
  }
  .deep_gray {
    background-color: #f8f8fa;
  }
  height: 100%;
  /deep/ .ant-pagination {
    bottom: 15px;
    right: 30px;
    position: fixed;
  }
}
</style>
