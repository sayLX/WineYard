<template>
  <div class="ctx">
    <div class="body">
      <Title title="辩护代理绑定"></Title>
      <ul class="searchBind">
        <li>
          <span>部门受案号</span>
          <input
            type="text"
            v-model="searchConditions.bmsah"
            placeholder="请输入"
          />
        </li>
        <li>
          <span>案件名称</span>
          <input
            type="text"
            v-model="searchConditions.ajmc"
            placeholder="请输入"
          />
        </li>
        <li>
          <span>人员姓名</span>
          <input
            type="text"
            v-model="searchConditions.xm"
            placeholder="请输入"
          />
        </li>
        <li>
          <span>人员类型名称</span>
          <input
            type="text"
            v-model="searchConditions.rylxmc"
            placeholder="请输入"
          />
        </li>
        <!-- <li>
                <span>是否绑定</span>
                <select class="search" v-model="searchConditions.sfbd">
                  <option disabled>请选择</option>
                  <option >已绑定</option>
                  <option > 未绑定</option>
                </select>
              </li> -->
        <li>
          <button id="search" @click="getPersonList(searchConditions)">
            <i class="fa fa-search"></i>查询
          </button>
        </li>
      </ul>
      <bind-result v-bind:ajrylb="ajrylb"></bind-result>
    </div>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue'
import Title from './components/Title.vue'
import { Api } from '@/api/index'
import bindResult from './components/bindResult.vue'
import '@/assets/font/css/all.css'
export default ({
  name: 'AgentBind',
  components: {
    Title,
    bindResult,
  },
  data() {
    return {
      // 查询条件
      searchConditions: {
        bmsah: '张某某抢劫案',
        ajmc: '张某某抢劫案',
        xm: '张铁',
        rylxmc: '检察官',
      },
      // 原始响应数据
      responseData: {
        code: '',
        data: {
          current: 0,
          entities: [
            {
              dhhm: '',
              dlbm: '',
              dzyj: '',
              gzzh: '',
              mc: '',
              rybm: '',
              sflsry: '',
              sftz: '',
              sfzh: '',
              xb: '',
              xh: 0,
              zzdwmc: '',
            },
          ],
          size: 0,
          total: 0,
        },
        message: '',
        success: true,
      },
      // 解析出的案件人员列表
      ajrylb: [
        {
          ajgkzt: 770000,
          ajmc: '张三抢劫案',
          ay: 770000,
          bmsah: 770000,
          cbdwmc: '某某某检察院',
          xb: '男',
          xm: '张三',
          zjhm: 510000000000000000,
          zjlx: '居民身份证',
        },
        {
          ajgkzt: 770000,
          ajmc: '李四抢劫案',
          ay: 770000,
          bmsah: 770000,
          cbdwmc: '某某某检察院',
          xb: '男',
          xm: '李四',
          zjhm: 510000000000000000,
          zjlx: '居民身份证',
        },
        {
          ajgkzt: 770000,
          ajmc: '王五抢劫案',
          ay: 770000,
          bmsah: 770000,
          cbdwmc: '某某某检察院',
          xb: '男',
          xm: '王五',
          zjhm: 510000000000000000,
          zjlx: '居民身份证',
        },
      ],
    }
  },
  methods: {
    // 获取案件人员列表
    getPersonList(data) {
      console.log("正在发起请求")
      Api.getCaseStaffList(data)
        .then((res) => {
      console.log('请求完成')
          this.ajrylb = res.data.entities[0]
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    //
  },
})
</script>
<style lang="scss" scoped>
.ctx {
  width: 100%;
  height: 100%;
  position: relative;
  .body {
    min-width: 1080px;
    position: absolute;
    left: 11px;
    right: 11px;
    top: 12px;
    bottom: 12px;
    border: solid 1px #d8d7d7;
    .form {
      padding: 10px 20px;
    }
    & > *:not(.title) {
      margin-left: 10px;
    }
    // 查询条件
    .searchBind {
      width: 100%;
      list-style: none;
      overflow: hidden;
      li {
        float: left;
        margin-bottom: 12px;
        // &:nth-child(3n){
        //   margin-right: 0;
        // };
        margin-right: 100px;

        span {
          width: 110px;
          padding: 0 12px;
          font-size: 12px;
          line-height: 34px;
          color: #666666;
          display: inline-block;
          text-align: right;
        }
        input,
        select {
          width: 250px;
          height: 34px;
          text-indent: 13px;
          background-color: #ffffff;
          border-radius: 3px;
          border: solid 1px #dcdfe6;
        }
        #search {
          width: 96px;
          height: 34px;
          border: 1px solid #dcdfe6;
          background-color: #1b9cff;
          border-radius: 3px;
          i {
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>
