<template>
    <div class="title">
        <div class="t">{{title}}</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
<style lang="scss">
.title {
    width: 100%;
    background-color: #ecf6f7;
    padding: 5px 10px;
    .t {
        font-weight: 600;
        border-left: 4px solid #28a2fd;
        padding-left: 10px;
    }
}
</style>
