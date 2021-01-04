<template>
<a-config-provider :locale="locale">
  <div id="app">
      <router-view></router-view>
  </div>
</a-config-provider>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
export default defineComponent({
  name: '',
  setup () {
    return {
      locale: zhCN
    }
  },
  created () {
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
      console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))
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
