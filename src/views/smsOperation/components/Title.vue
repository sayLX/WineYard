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
    border-bottom: 1px solid #d8d7d7;
    padding: 5px 10px;
    margin-bottom: 10px;
    .t {padding-left: 10px;
        font-weight: 600;
        border-left: 4px solid #28a2fd;
    }
}
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
        .form {
            padding: 10px 20px;
        }
    }
}
</style>
