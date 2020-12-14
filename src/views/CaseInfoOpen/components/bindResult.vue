<template>
  <div id="result">
    <div class="resultTitle">
      <span class="xm">姓名</span>
      <span class="xb">性别</span>
      <span class="zjlx">证件类型</span>
      <sapn class="zjhm">证件号码</sapn>
      <lspani class="ay">案由</lspani>
      <span class="ajmc">案件名称</span>
      <span class="cbdw">承办单位</span>
      <span class="gkzt">公开状态</span>
      <span class="cz">操作</span>
    </div>
    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
      class="result"
    >
      <a-sub-menu key="sub1" >
        <template #title>
          <span><SettingOutlined /><span>刑事案件</span></span>
        </template>
        <a-menu-item key="9">

          <span v-for="(result,index) in resultValues"
                :key="index"
                :class='resultNames[index]'>
            {{result}}
          </span>
           <BindBox></BindBox>
           <Detail></Detail>
        </a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>

      </a-sub-menu>
      <a-sub-menu key="sub4" >
        <template #title>
          <span><SettingOutlined /><span>刑事申诉案件</span></span>
        </template>
        <a-menu-item key="9">
          <span v-for="(result,index) in resultValues"
                :key="index"
                :class='resultNames[index]'>
            {{result}}
          </span>
           <BindBox></BindBox>
           <Detail></Detail>


        </a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>

      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import {SettingOutlined } from '@ant-design/icons-vue';
import BindBox from './bindBox.vue'
import Detail from './detail.vue'

export default {
  name:'bindResult',
  components: {
    SettingOutlined,
    BindBox,
    Detail
  },
  data() {
    return {
      resultNames: ['xm' ,'xb', 'zjlx', 'zjhm',
                    'ay' ,'ajmc' ,'cbdw' ,'gkzt' ,'cz'],
      resultValues: ['张三' ,'男' ,'居民身份证', '1111111111111111111', '故意伤害罪', '张三涉嫌故意伤害', '四川省院', '已公开'],
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
};
</script>
<style lang="scss" scoped>
.resultTitle{
  padding: 5px 0px 5px 50px;
}
 .ant-menu-item,.resultTitle{
  margin: 0;
  background-color: #f8f8fa;
  border-top: solid 1px #dcdfe6;
  border-bottom: solid 1px #dcdfe6;
  overflow: hidden;
  &>*{float: left;}
    .xm{width: 100px;};
    .xb{width: 40px;};
    .zjlx{width: 90px;margin-left: 40px;};
    .zjhm{width: 220px;margin-left: 40px;};
    .ay{width: 100px;};
    .ajmc{width: 190px;};
    .cbdw{width: 100px};
    .gkzt{width: 60px;};
    .cz{width: 40px;margin-left: 40px;};
    button,button:hover{
      border:none;
      margin-left: 40px;
      background-color: #f8f8fa;
      color: #1890ff;
    };
    button:focus{
      outline: none;
    }
}
/deep/ .result{
  .ant-menu-submenu{
    width: 100%;
    padding-bottom: 0;
    font-size: 12px;
    .ant-menu-submenu-title{
      height: 40px;
      font-weight: bold;
      .ant-menu-submenu-arrow{
        left: 20px;
      }
    }
    .ant-menu-item{
      span{
        float: left;
      }
      span:first-child{
        margin-left: 0;
      }
    }
  }
   svg{
    display: none;
  }
}
</style>
