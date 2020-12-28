<template>
  <div class="sms-template">
    <Title title="短信模板"></Title>
    <div class="template-category" style="width: 350px">
      <div class="operations">
        <div class="module-title"><span>短信模板类别</span></div>
        <div class="operation">
          <a-button @click="refreshTemplate">
            <template #icon><SyncOutlined /></template>刷新
          </a-button>
          <!-- 添加模板组件 -->
          <addTemplate></addTemplate>
          <!-- 编辑模板组件 -->
          <editTemplate></editTemplate>
          <!-- 删除模板 -->
          <a-button id="delete-template">
            <template #icon><DeleteOutlined /></template>
            <a-popconfirm
              title="确认删除这个短信模板吗?"
              ok-text="确认"
              cancel-text="取消"
              @confirm="confirm"
              @cancel="cancel"
            >
              <a href="">删除</a>
            </a-popconfirm>
          </a-button>
        </div>
      </div>
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        :inline-collapsed="collapsed"
      >
        <a-sub-menu key="sub1">
          <template #title>
            <span><FolderOutlined /><span>公共</span></span>
          </template>
          <a-menu-item key="1"
            ><FileOutlined /><span>Option 1</span></a-menu-item
          >
          <a-menu-item key="2"
            ><FileOutlined /><span>Option 1</span></a-menu-item
          >
          <a-menu-item key="3"
            ><FileOutlined /><span>Option 1</span></a-menu-item
          >
          <a-menu-item key="4"
            ><FileOutlined /><span>Option 1</span></a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="template">
      <div class="operations">
        <div class="module-title"><span>短信模板</span></div>
        <div class="operation">
          <!-- 添加模板组件 -->
          <addTemplate></addTemplate>
          <!-- 编辑模板组件 -->
          <editTemplate></editTemplate>
          <!-- 删除模板 -->
          <a-button id="delete-template">
            <template #icon><DeleteOutlined /></template>
            <a-popconfirm
              title="确认删除这个短信模板吗?"
              ok-text="确认"
              cancel-text="取消"
              @confirm="confirm"
              @cancel="cancel"
            >
              <a href="">删除</a>
            </a-popconfirm>
          </a-button>
        </div>
      </div>
      <div class="template-list">
        <a-row class="list-head list-item" style="font-weight: bold">
          <a-col :span="1"></a-col>
          <a-col :span="6"> 单位编码</a-col>
          <a-col :span="6"> 检查机关 </a-col>
          <a-col :span="11"> 这是一段关于该模板的说明..... </a-col>
        </a-row>
        <a-row class="list-item">
          <a-col :span="1"></a-col>
          <a-col :span="6"> 926313132323232 </a-col>
          <a-col :span="6"> 检查机关 </a-col>
          <a-col :span="11"> 这是一段关于该模板的说明..... </a-col>
        </a-row>
        <a-row class="list-item">
          <a-col :span="1"></a-col>
          <a-col :span="6"> 926313132323232 </a-col>
          <a-col :span="6"> 检查机关 </a-col>
          <a-col :span="11"> 这是一段关于该模板的说明..... </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue'
import {
  SyncOutlined,
  DeleteOutlined,
  FolderOutlined,
  FileOutlined,
} from '@ant-design/icons-vue'
import editTemplate from './components/editTemplate.vue'
import addTemplate from './components/addTemplate.vue'
import { message } from 'ant-design-vue'
export default {
  name: 'smsTemplate',
  components: {
    Title,
    SyncOutlined,
    DeleteOutlined,
    FolderOutlined,
    FileOutlined,
    editTemplate,
    addTemplate,
  },

  data() {
    return {
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      templateListData: {},
    }
  },

  watch: {
    openKeys(val, oldVal) {
      this.preOpenKeys = oldVal
    },
  },

  methods: {
    // 点击menuItem
    click(){
      //
    },
    refreshTemplate() {
      message.success('已刷新！')
    },
    confirm(e) {
      console.log(e.target)
      message.success('成功删除模板')
    },
    cancel(e) {
      console.log(e)
      message.error('Click on No')
    },
  },
}
</script>
<style lang='scss' scoped>
.sms-template {
  $border: 1px solid #d8d7d7;
  height: calc(100% - 24px);
  border: $border;
  margin: 12px 10px;

  // 公用操作样式
  .operations {
    .module-title {
      border-bottom: $border;
      padding-left: 10px;
      span {
        display: inline-block;
        line-height: 30px;
        border-bottom: 3px solid #28a2fd;
        font-weight: bold;
      }
    }
    /deep/ .operation {
      padding: 10px 0;
      border-bottom: $border;
      overflow: hidden;
      button {
        float: left;
        margin-left: 10px;
        padding: 0 10px;
      }
    }
  }
  .template-category {
    height: calc(100% - 53px);
    margin: 10px;
    border: $border;
    float: left;
  }
  .template {
    width: calc(100% - 380px);
    height: calc(100% - 52px);
    margin: 10px;
    margin-left: 0;
    border: $border;
    float: left;
    .template-list {
      padding: 10px;
      padding-top: 0;
      .list-item {
        height: 40px;
        line-height: 40px;
        text-indent: 10px;
        border-bottom: $border;
      }
    }
  }
}
</style>
