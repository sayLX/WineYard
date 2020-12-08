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
    title: '律师证件号码',
    dataIndex: 'infoName',
    key: 'infoName'
  },
  {
    title: '律师姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '身份证号码',
    dataIndex: 'sfz',
    key: 'sfz'
  },
  {
    title: '联系电话',
    dataIndex: 'lxdh',
    key: 'lxdh'
  },
  {
    title: '备用联系电话',
    dataIndex: 'bylxdh',
    key: 'bylxdh'
  },
  {
    title: '联系地址',
    dataIndex: 'lxdz',
    key: 'lxdz'
  },
  {
    title: '操作',
    dataIndex: 'cz',
    key: 'cz',
    width: '20%',
    align: 'center'
  }
]

const dataCol = () => {
  const arr = []
  for (let i = 0; i < 500; i++) {
    arr.push({
      key: '1',
      infoName: '5623262622622615166',
      name: '张三',
      sfz: '561616162613135496612',
      lxdh: '110',
      bylxdh: '120',
      lxdz: 'cs',
      cz: '详情'
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
