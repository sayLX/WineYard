<template>
  <a-table class="a-table" :columns="columns" :data-source="data"
    :pagination='pagination'
    size="middle"
    :rowClassName="rowClassName"
    :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
  >
    <template #name="{text}">
      <a>{{ text }}</a>
    </template>
    <template #customTitle>
      <span><span style="color: red;">*</span> 律师证件号码</span>
    </template>
    <template #lsnamet>
      <span><span style="color: red;">*</span> 律师姓名</span>
    </template>
    <template #sfzt>
      <span><span style="color: red;">*</span> 身份证号码</span>
    </template>
    <template #lxdht>
      <span><span style="color: red;">*</span> 联系电话</span>
    </template>
  </a-table>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
const columns = [
  {
    dataIndex: 'infoName',
    key: 'infoName',
    slots: { title: 'customTitle', customRender: 'infoName' }
  },
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'lsnamet', customRender: 'name' }
  },
  {
    dataIndex: 'sfz',
    key: 'sfz',
    slots: { title: 'sfzt', customRender: 'sfz' }
  },
  {
    dataIndex: 'lxdh',
    key: 'lxdh',
    slots: { title: 'lxdht', customRender: 'lxdh' }
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
  }
]

const dataCol = () => {
  const arr = []
  for (let i = 0; i < 500; i++) {
    arr.push({
      key: i,
      infoName: '5623262622622615166',
      name: '张三',
      sfz: '561616162613135496612',
      lxdh: '110',
      bylxdh: '120',
      lxdz: 'cs'
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
      defaultPageSize: 7,
      showTotal: (total: number) => `共 ${total} 条数据`,
      showQuickJumper: true
    }
    const data = dataCol()
    const selectedData = reactive({
      selectedRowKeys: []
    })
    const onSelectChange = (selectedRowKeys) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      selectedData.selectedRowKeys = selectedRowKeys;
    }
    return {
      data,
      columns,
      rowClassName,
      pagination,
      ...toRefs(selectedData),
      onSelectChange
    }
  }
})
</script>
<style lang="scss">
.a-table {
  height: 100%;
  .shallow_gray {
    background-color: #fff;
  }
  .deep_gray {
    background-color: #f8f8fa;
  }
}
</style>
