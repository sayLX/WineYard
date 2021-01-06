<template>
  <div class="left">
    <div class="title">
      <span class="text">组织机构</span>
    </div>
    <el-input
      placeholder="请输入查询关键字"
      suffix-icon="el-icon-search"
      size="small"
      v-model="input1">
    </el-input>
    <div class="list">
      <div class="item">高检院</div>
      <div class="item">高检院</div>
      <div class="item">高检院</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' socped>
.left {
  width: 100%;
  border: 0.5px solid #e2e2e2;
  margin: 7px;
  margin-right: 0;
  padding: 0 5px;
  .title {
    height: 30px;
    font-size: 12px;
    padding: 0 5px;
    line-height: 30px;
    border-bottom: 0.5px solid#e2e2e2;
    .text {
      padding: 5px 5px;
      border-bottom: 2px solid #28a2fd;
    }
  }
  .el-input {
    margin-top: 5px;
    height: 30px;
  }
  .list {
    .item {
      height: 35px;
      margin: 0 5px;
      line-height: 35px;
      padding-left: 10px;
      border-bottom: 0.5px solid#e2e2e2;
    }
    .item:hover {
      background: #eee;
    }
  }
}
</style>