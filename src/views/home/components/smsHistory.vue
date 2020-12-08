<template>
    <div class="container" :id="id" :option="option"></div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
    props: {
        id: {
            type: String
        },
            //option 是图表的配置数据
        option: {
            type: Object
        }
    },
    mounted() {
        HighCharts.chart(this.id, this.option)
    }
}
</script>

<style scoped>
/* 容器 */
.container{
  width: 100%;
  height: 206px;
  margin: 0 auto;
}
</style>
