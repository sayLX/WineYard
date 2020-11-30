<template>
    <div class="title">
        <span class="t">{{title}}</span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ChartTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
.title {
    width: 100%;
    height: 36px;
    padding: 5px 10px;
    border-bottom: solid 1px #e2e2e2;
    .t {
        font-weight: 600;
        border-bottom: 2px solid #28a2fd;
        padding: 9px 5px;
    }
}
</style>
