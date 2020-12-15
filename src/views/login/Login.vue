<template>
<div id="index">
    <div class="login">

      <a-form ref="loginFormRef" :rules='loginFormRules' :model="loginForm" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item  name='organization' class="selectOrg">
          <HomeOutlined style="color:rgba(0,0,0,.25)"/>
          <a-select v-model="loginForm.organization" placeholder="请选择单位">
            <a-select-option v-for="(org,index) in orgs" :key="index" :value="org">{{org}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item name='username'>
          <a-input  v-model:value="loginForm.username" placeholder="请输入用户名">
            <template #prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
          </a-input>
        </a-form-item>
        <a-form-item name='password'>
          <a-input v-model:value="loginForm.password" type="password" placeholder="请输入密码">
            <template #prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
          </a-input>
        </a-form-item>
        <span id="login-btn">
          <a-button type="primary" @click="login">
            登录
            <br>
            系统
          </a-button>
        </span>
      </a-form>
    </div>
</div>
</template>

<script>
import {UserOutlined,LockOutlined ,HomeOutlined} from'@ant-design/icons-vue'
// const loginApi = 'www.baidu.com'
import { useStore } from 'vuex'
import { useRouter } from "vue-router"
import { reactive, toRefs } from 'vue'
export default ({
  name: 'login',
  components: {
    UserOutlined,
    LockOutlined,
    HomeOutlined
  },
  setup () {
    const data = reactive({
      orgs: ['北京', '上海', '南京'],
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      loginApi:'',
      loginForm: {
        organization: '',
        username: '',
        password:'',
        type: [],
        resource: '',
        desc: '',
      },
      loginFormRules:{
        organization:[
          {required:true,message:'请选择机构',trigger:'blur'},
          ],
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'},
          {min:2,max:10,message:'长度在2到10个字符之间',trigger:'blur'}
        ],
        password:[
          {min:6,max:10,message:'长度在6到10个字符之间',trigger:'blur'},
          {required:true,message:'请输入密码',trigger:'blur'},
        ]
      }
    })
    const store = useStore()
    const router = useRouter()
    const login = () => {
      console.log(store)
      console.log(store.getters['isLogin'])
      store.commit('login')
      router.push({name: 'homePage'})
      // new Promise((resolve,reject) => {
      //   const status = this.$refs.loginFormRef.validate()
      //   resolve(status)
      //   reject(status)

      // }).then(function(status){
      //   console.log(status.username)
      // })
      // .catch(function(status){
      //   console.log(status.outOfDate)
      // })
    }
    return {
      ...toRefs(data),
      login
    }
  //   const getmusic = () => {
  //     axios({
  //       method:'post',
  //       url:that.loginUrl,
  //       data:{
  //         organization:that.loginForm.organization,
  //         username:that.loginForm.username,
  //         password:that.loginForm.password}
  //       })
  //       .then(
  //         (response) => {
  //           if(respose.success)
  //             {
  //               // 将takon储存
  //               window.sessionStorage.setItem('takon',response.tokon)
  //               // 登陆成功跳转
  //               this.$router.push('/homePage')
  //             }
  //         },function (err) {
  //             console.log(err);
  //         }
  //     )
  //  }
  }
})
</script>

<style scoped lang='scss'>
#index {
  *{
    margin: 0;
    padding: 0;
  }
  min-width: 1210px;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('~@/assets/img/登录bg.jpg');
  background-position: center;
  background-size: 100%,100%;

  /deep/ .login {
    form{
      position: relative;
      margin-top: 40px;
    }
    position: absolute;
    top: 55%;
    left: 49%;
    transform: translate(-50%,-50%);
    .ant-row{
      padding-right: 0 !important;
      padding: 0;
      margin: 0;
      margin-bottom: 5px;

      .ant-col{
        margin: auto;
        position: relative;
        #organization{
          position: absolute;
          left: 10px;
          top: calc(50% - 5px);
          z-index: 1000;
      }
      }

      .ant-input-affix-wrapper,.ant-select-selector{
        &,input{
          font-size: 12px;
          background-color: rgb(221,232,242);
        }
        border-radius: 20px;
        overflow: hidden;
        padding-left: 10px;
      }

    }
    // 设置三个框的样式
    input{
      width: 350px !important;
      height: 30px;
      border: none;
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
    }
    .ant-select-selector{
      span{
        text-align: left;
        text-indent: 17px;
      }
    }
    // 设置提交按钮
    #login-btn{
      width: 100px;
      height: 100px;
      background-color: rgba(196, 228, 226, 0.2);
      border-radius: 50%;
      position: absolute;
      left: 110%;
      top: 60%;
      button{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: block;
        word-wrap: break-all;
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
