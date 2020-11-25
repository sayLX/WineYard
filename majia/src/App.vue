<template>
  <div id="nav">
    <!-- <router-link to="/login">login</router-link> | -->
    <!-- <router-link to="/about">About</router-link>|
    <router-link to="/">Home</router-link> -->
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'app'
})
</script>

<style scoped lang="scss">
#app {
  min-width: 1080px;
}
</style>
