<template>
<a-config-provider :locale="locale">
  <div id="app">
      <Menu></Menu>
  </div>
</a-config-provider>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import Menu from './components/Menu.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
export default defineComponent({
  name: '',
  components: {
    Menu
  },
  setup () {
    return {
      locale: zhCN
    }
  }
})
</script>

<style lang="scss" scoped>
#app {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>
