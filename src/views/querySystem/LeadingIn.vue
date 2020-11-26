<template>
    <div class="ctx">
        <div class="body">
            <Title title="导入统计"></Title>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from './components/Title.vue'
export default defineComponent({
  name: '',
  components: {
    Title
  }
})
</script>

<style lang="scss" scoped>
.ctx {
    width: 100%;
    height: 100%;
    position: relative;
    .body {
        position: absolute;
        left: 11px;
        right: 11px;
        top: 12px;
        bottom: 12px;
        border: solid 1px #d8d7d7;
    }
}
</style>
