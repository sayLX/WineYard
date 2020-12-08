<template>
    <a-modal
      title="新增律师"
      v-model:visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      width='700px'
    >
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="律师证件号码" v-bind="validateInfos.name">
          <a-input v-model:value="modelRef.name" />
        </a-form-item>
        <a-form-item label="律师姓名" v-bind="validateInfos['sub.name']">
          <a-input v-model:value="modelRef.sub.name" />
        </a-form-item>
      </a-form>
    </a-modal>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, toRaw, computed } from 'vue'
import { useForm } from '@ant-design-vue/use'
export default defineComponent({
  props: {
    show: {
      type: Boolean
    }
  },
  setup (props, ctx) {
    /* -- 表单数据 -- */
    const modelRef = reactive({
      name: '',
      sub: {
        name: ''
      }
    })
    const { validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
          {
            required: true,
            message: 'Please input name'
          }
        ],
        'sub.name': [
          {
            required: true,
            message: 'Please input sub name'
          }
        ]
      })
    )
    const onSubmit = async (): Promise<boolean> => {
      await validate()
        .then(res => {
          console.log(res, toRaw(modelRef))
          return true
        })
        .catch(err => {
          console.log('error', err)
          return false
        })
      return false
    }

    /* -- 控制弹窗展示 -- */
    const modalData = reactive({
      visible: computed({
        set: (val) => {
          if (val === false) {
            ctx.emit('update:show', false)
          }
        },
        get: () => props.show
      }),
      confirmLoading: false
    })
    const handleOk = () => {
      // 关闭对话窗口，顺便提交表单
      modalData.confirmLoading = true
      // 这里提交表单
      setTimeout(() => {
        const sub = onSubmit()
        if (sub) {
          modalData.visible = false
          modalData.confirmLoading = false
        }
        modalData.confirmLoading = false
      }, 2000)
    }

    return {
      handleOk,
      ...toRefs(modalData),
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      modelRef,
      onSubmit
    }
  }
})
</script>
