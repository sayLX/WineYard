<template>
  <div class="ctx">
        <div class="body">
            <page-title title="律师信息管理"></page-title>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
export default defineComponent({
  name: '',
  components: {
    PageTitle
  }
})
</script>

<style lang='scss'>
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
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
}
</style>
