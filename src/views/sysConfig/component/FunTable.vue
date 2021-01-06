<template>
  <a-table class="a-table" :columns="columns" :data-source="data"
    :pagination='pagination'
    size="middle"
    tableLayout='fixed'
    :rowClassName="MyRowClassName"
    :defaultExpandAllRows='true'
  >
    <template #name="{text}">
      <a>{{ text }}</a>
    </template>
    <template v-if="showCol8" #col8 = "{ record }">
      <div>
        <a-button v-if="record['flbm']" type="link" @click="add(record)">
          添加
        </a-button>
        <a-button type="link" @click="del(record)">
          删除
        </a-button>
      </div>
    </template>
  </a-table>

  <a-modal
    title="添加功能"
    :visible="visiblea"
    :confirm-loading="confirmLoadinga"
    @ok="handleOka"
    @cancel="handleCancela"
  >
    <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <a-form-item label="功能名称">
        <a-input v-model:value="gnmc"
        />
      </a-form-item>
      <a-form-item label="功能说明">
        <a-input v-model:value="gnsm"
        />
      </a-form-item>
      <a-form-item label="功能地址">
        <a-input v-model:value="gndz"
        />
      </a-form-item>
      <a-form-item label="功能序号">
        <a-input v-model:value="gnxh"
        />
      </a-form-item>
      <a-form-item label="功能显示名称">
        <a-input v-model:value="gnxsmc"
        />
      </a-form-item>
      <a-form-item label="功能参数">
        <a-input v-model:value="gncs"
        />
      </a-form-item>
      <a-form-item label="功能图标">
        <a-input v-model:value="gntb"
        />
      </a-form-item>
      <a-form-item label="是否高检院适用(Y/N)">
        <a-input v-model:value="sfgjysy"
        />
      </a-form-item>
      <a-form-item label="是否区县院适用(Y/N)">
        <a-input v-model:value="sfqxysy"
        />
      </a-form-item>
      <a-form-item label="是否市级院适用(Y/N)">
        <a-input v-model:value="sfsjysy"
        />
      </a-form-item>
      <a-form-item label="是否省院适用(Y/N)">
        <a-input v-model:value="sfsysy"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script lang='ts'>
import { computed, defineComponent, PropType, reactive, toRefs } from 'vue'
import { Api } from '@/api/index'
import { message } from 'ant-design-vue'
interface PropCol {
  title: string;
  dataIndex: string;
  key: string;
  width?: string;
  align?: string;
  customHeaderCell?: Function;
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
  emits: ['success'],
  setup (props, {emit}) {
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
      position: 'bottom'
    }
    const data = computed(() => {
      return props.list
    })

    const addData = reactive({
      gnmc: '',
      gnsm: '',
      gndz: '',
      gnxh: '',
      gnxsmc: '',
      sfgjysy: '',
      sfqxysy: '',
      sfsjysy: '',
      sfsysy: '',
      flbm: '',
      gncs: '',
      gntb: ''
    })
    //添加 对话框的数据
    const addModalData = reactive({
      visiblea: false,
      confirmLoadinga: false
    })
    const showModala = () => {
      addModalData.visiblea = true;
    }
    const handleOka = () => {
      if (Object.values(addData).some(item => item == '')) {
        message.error('输入信息不完整')
      } else {
        addModalData.confirmLoadinga = true
        Api.addGndy(addData).then(res => {
          console.log(res)
          if(res['success']) {
              message.success('添加成功')
              emit('success')
              addModalData.confirmLoadinga = false
              addModalData.visiblea = false
            }
        })
      }
    }
    const handleCancela = () => {
      addModalData.visiblea = false;
    }

    const add = (record) => {
      addData.flbm = record['flbm']
      showModala()
    }
    const del = (record) => {
      if (record['flbm']) {
        if(record['children'].length == 0){
            Api.delGnfl(record['flbm']).then((res) => {
            if(res['success']) {
              message.success(res['message'])
              emit('success')
            }
          })
        } else {
          message.error('请先删除子项')
        }
      }
      if (record['gnbm']) {
        Api.delGndy(record['gnbm']).then((res) => {
            if(res['success']) {
              message.success(res['message'])
              emit('success')
            }
          })
      }
    }

    return {
      data,
      columns: props.col,
      rowClassName,
      pagination,
      MyRowClassName,
      add,
      del,
      ...toRefs(addModalData),
      showModala,
      handleOka,
      handleCancela,
      ...toRefs(addData)
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
  position: relative;
  .ant-spin-nested-loading {
    position: static;
    .ant-spin-container{
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
