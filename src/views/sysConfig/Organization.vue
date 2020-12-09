<template>
  <div class="ctx">
        <div class="body">
            <page-title title="组织机构"></page-title>
            <el-container class="container">
                <el-aside width="230px" class="left">
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
                </el-aside>
                <el-main class="right">
                  <div class="r-top">
                    <div class="title">
                      <span class="text">单位机构</span>
                    </div>
                    <div class="info">
                      <div class="item"><span>单位名称: </span>高检院</div>
                      <div class="item"><span>单位简称: </span>高检院</div>
                      <div class="item"><span>单位级别: </span>1</div>
                    </div>
                  </div>
                  <div class="r-bottom">
                    <div class="title">
                      <span class="text">人员信息</span>
                      <div class="form">
                        <a-form
                            layout="inline"
                        >
                          <a-form-item label="姓名" name="name">
                              <div class="input">
                                <a-input placeholder="请输入">
                                        </a-input>
                              </div>
                          </a-form-item>
                          <a-form-item label="工号" name="region">
                              <div  class="input">
                                <a-input placeholder="请输入">
                                        </a-input>
                              </div>
                          </a-form-item>
                          <a-form-item label="工作证号" name="region">
                              <div  class="input">
                                <a-input placeholder="请输入">
                                        </a-input>
                              </div>
                          </a-form-item>
                          <a-form-item>
                              <a-button type="primary">
                                  <template #icon><SearchOutlined /></template>查询
                              </a-button>
                          </a-form-item>
                        </a-form>
                      </div>
                      <organization-table></organization-table>
                    </div>
                  </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import PageTitle from '../../components/PageTitle.vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import OrganizationTable from './components/OrganizationTable.vue'
export default defineComponent({
  name: '',
  components: {
    PageTitle,
    SearchOutlined,
    OrganizationTable
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
        .container {
          display: flex;
          height: 100%;
          .left {
            border: 0.5px solid #e2e2e2;
            margin: 7px;
            margin-right: 0;
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
              width: 220px;
              margin-left: 4px;
              margin-top: 5px;
              height: 30px;
            }
            .list {
              margin-top: 10px;
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
          .right {
            margin: 7px;
            border: 0.5px solid #e2e2e2;
            padding: 0;
            display: flex;
            flex-direction: column;
            .r-top {
              height: 30%;
              border: 0.5px solid#e2e2e2;
              margin: 5px;
              .info {
                display: flex;
                justify-content: space-between;
                padding: 15px;
                .item {
                  width: 300px;
                  span {
                    color: #aaa;
                  }
                }
              }
            }
            .r-bottom {
              border: 0.5px solid #e2e2e2;
              flex: 1;
              margin: 5px;
              margin-top: 0;
              .form {
                padding: 5px 20px;
                display: flex;
                justify-content: space-between;
                .input {
                  width: 250px;
                }
              }
            }
          }
          .title {
            height: 30px;
            font-size: 12px;
            padding: 0 5px;
            line-height: 30px;
            border-bottom: 0.5px solid #e2e2e2;
            .text {
              padding: 5px 5px;
              border-bottom: 2px solid #28a2fd;
            }
          }
        }
    }
}
</style>
