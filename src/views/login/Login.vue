<template>
  <div id="index">
    <div class="login">
      <a-form
        ref="loginFormRef"
        :rules="loginFormRules"
        :model="loginForm"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item name="dlbm">
          <a-input
            v-model:value="loginForm.dlbm"
            placeholder="请输入登录别名"
          >
            <template #prefix
              ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="zzdwbm">
          <a-input
            v-model:value="loginForm.zzdwbm"
            placeholder="请输入在职单位编码"
          >
            <template #prefix
              ><HomeOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="kl">
          <a-input
            v-model:value="loginForm.kl"
            type="password"
            placeholder="请输入口令"
          >
            <template #prefix
              ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <span id="login-btn">
          <a-button type="primary" @click="login">
            登录
            <br />
            系统
          </a-button>
        </span>
      </a-form>
    </div>
  </div>
</template>

<script lang='ts'>
import {UserOutlined,LockOutlined,HomeOutlined,} from'@ant-design/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from "vue-router"
import { reactive, toRefs } from 'vue'
import { Api } from '@/api/index'
import { UserInfo } from '@/model/UserInfo'
export default ({
  name: 'login',
  components: {
    UserOutlined,
    LockOutlined,
    HomeOutlined,
  },
  setup() {
    const data = reactive({
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      loginApi: '',
      loginForm: {
        dlbm: 'test1803',
        zzdwbm: '980000',
        kl: '111111',
      },
      loginFormRules: {
        dlbm: [{ required: true, message: '登录别名不能为空', trigger: 'blur' }],
        zzdwbm: [{required: true, message: '在职单位编码不能为空', trigger: 'blur' }],
        kl: [
          {min: 6,max: 10,message: '长度在6到10个字符之间',trigger: 'blur'},
          {required: true, message: '口令不能为空', trigger: 'blur' },
        ],
      },
    })
    const router = useRouter()
    const store = useStore()
    const login = () => {
      Api.login('test1803','111111','980000').then((res) => {
        // 将获取到的信息保存在sessionStorage中
        window.sessionStorage.setItem('user_info', res.data)
        // 同时将用户信息保存在vuex中
        const userInfo: UserInfo = res.data
        // 将用户名存在sessionStorage
        window.sessionStorage.setItem('userName',userInfo.mc)

        store.commit('login', userInfo)
        router.push({name: 'homePage'})
      })
    }
    return {
      ...toRefs(data),
      login,
    }
  }
})
</script>

<style scoped lang='scss'>
#index {
  * {
    margin: 0;
    padding: 0;
  }
  min-width: 1210px;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('~@/assets/img/登录bg.jpg');
  background-position: center;
  background-size: 100%, 100%;

  /deep/ .login {
    form {
      position: relative;
      margin-top: 40px;
    }
    // 登录框居中
    position: absolute;
    top: 55%;
    left: 49%;
    transform: translate(-50%, -50%);
    .ant-row {
      padding-right: 0 !important;
      padding: 0;
      margin: 0;
      margin-bottom: 5px;

      .ant-col {
        margin: auto;
        position: relative;
        // 选择框位置
        #organization {
          position: absolute;
          left: 10px;
          top: calc(50% - 5px);
          z-index: 1000;
        }
      }

      .ant-input-affix-wrapper,
      .ant-select-selector {
        &,
        input {
          font-size: 12px;
          background-color: rgb(221, 232, 242);
        }
        border-radius: 20px;
        overflow: hidden;
        padding-left: 10px;
      }
    }
    // 设置输入框的样式
    input {
      width: 350px !important;
      height: 30px;
      border: none;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
    }
    .ant-select-selector {
      span {
        text-align: left;
        text-indent: 17px;
      }
    }
    // 设置提交按钮
    #login-btn {
      width: 100px;
      height: 100px;
      background-color: rgba(196, 228, 226, 0.2);
      border-radius: 50%;
      position: absolute;
      left: 110%;
      top: 60%;
      button {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: block;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        border: none;
        background-color: #fff;
        font-size: 20px;
        font-weight: bold;
        line-height: 28px;
        color: #1771ae;
      }
    }
  }
}
</style>
