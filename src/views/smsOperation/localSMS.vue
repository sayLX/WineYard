<template>
    <div class="ctx">
        <div class="body">
            <Title title="本院通知"></Title>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from './components/Title.vue'
export default defineComponent({
  name: 'customSMS',
  components: {
    Title
  }
})
</script>

<style lang="scss" scoped>
</style>
