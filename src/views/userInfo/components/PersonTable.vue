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
    title: '部门编码',
    dataIndex: 'col1',
    key: 'col1'
  },
  {
    title: '部门名称',
    dataIndex: 'col2',
    key: 'col2'
  },
  {
    title: '角色名称',
    dataIndex: 'col3',
    key: 'col3'
  },
  {
    title: '名称',
    dataIndex: 'col4',
    key: 'col4'
  },
  {
    title: '性别',
    dataIndex: 'col5',
    key: 'col5'
  },
  {
    title: '工号',
    dataIndex: 'col6',
    key: 'col6'
  },
  {
    title: '移动电话号码',
    dataIndex: 'col7',
    key: 'col7'
  },
  {
    title: '工作证号',
    dataIndex: 'col8',
    key: 'col8'
  },
  {
    title: '是否临时人员',
    dataIndex: 'col9',
    key: 'col9'
  },
  {
    title: '是否停职',
    dataIndex: 'col10',
    key: 'col10'
  }
]

const dataCol = () => {
  const arr = []
  for (let i = 0; i < 500; i++) {
    arr.push({
      key: i,
      col1: '',
      col2: '',
      col3: '',
      col4: '',
      col5: '',
      col6: '',
      col7: '',
      col8: '',
      col9: '',
      col10: ''
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
