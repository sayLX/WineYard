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

    <template v-slot:cz>
      <span>
        <!-- 编辑人员信息 -->
        <editPersonInfo></editPersonInfo>
        <!-- 删除人员信息 -->
        <a-popconfirm
          title="确认删除用户信息吗?"
          ok-text="确认"
          cancel-text="取消"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a href="" style="margin-right:10px">删除</a>
        </a-popconfirm>
        <a-popconfirm
          title="确认重置用户密码吗?"
          ok-text="确认"
          cancel-text="取消"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a href="">重置密码</a>
        </a-popconfirm>
      </span>
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
    },
    showCol8: {
      type: Boolean,
      default: false
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
    //     // 弹出确认框是否删除
    // const confirm=()=>{
    //   message.success('已成功处理！')
    // }
    // const cancel=()=>{
    //   message.error('已取消处理！')
    // }

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
