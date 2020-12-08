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
    title: '工号',
    dataIndex: 'infoName',
    key: 'infoName'
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '性别',
    dataIndex: 'xb',
    key: 'xb'
  },
  {
    title: '登陆别名',
    dataIndex: 'dlbm',
    key: 'dlbm'
  },
  {
    title: '工作证号',
    dataIndex: 'gzzh',
    key: 'gzzh'
  },
  {
    title: '联系电话',
    dataIndex: 'lxdh',
    key: 'lxdh'
  },
  {
    title: '电子邮件',
    dataIndex: 'dzyj',
    key: 'dzyj'
  },
  {
    title: '操作',
    dataIndex: 'cz',
    key: 'cz'
  }
]

const dataCol = () => {
  const arr = []
  for (let i = 0; i < 500; i++) {
    arr.push({
      key: '1',
      infoName: '自定义模板',
      name: '张三',
      xb: '男',
      dlbm: '管理员',
      gzzh: '0001',
      lxdh: '110',
      dzyj: '123',
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
      defaultPageSize: 14,
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
