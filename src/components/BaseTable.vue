<template>
  <a-table
    class="a-table"
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
    size="middle"
    tableLayout='fixed'
    :rowClassName="MyRowClassName"
    :defaultExpandAllRows='true'
  >
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>
<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue'
interface PropCol {
  title: string;
  dataIndex: string;
  key: string;
  width?: string;
  align?: string;
}
export default defineComponent({
  props: {
    list: Array,
    col: Array as PropType<PropCol[]>,
    size: Number,
    tableColor: {
      type: Boolean,
      default: true
    }
  },
  components: {
    // editPersonInfo
  },

  setup(props) {
    const rowClassName = (record: object, index: number): string => {
      const className = index % 2 === 0 ? 'shallow_gray' : 'deep_gray'
      return className
    }
    const MyRowClassName = () => {
      return props.tableColor ? rowClassName : ''
    }
    const pagination = {
      defaultPageSize: props.size,
      showTotal: (total: number) => `共 ${total} 条数据`,
      showQuickJumper: true,
      position: 'bottom',
    }

    const data = computed(() => {
      return props.list
    })

    return {
      data,
      columns: props.col,
      rowClassName,
      pagination,
      MyRowClassName
    }
  },
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
  position: relative;
  .ant-spin-nested-loading {
    position: static;
    .ant-spin-container {
      position: static;
      .ant-pagination {
        bottom: 0px;
        right: 30px;
        position: absolute;
      }
    }
  }
}
</style>
