<template>
    <div id="home_bar">
      <div id="logo">
        <img src="@\assets\img\logo.png" alt="">
        <button>短信推送平台</button>
      </div>
      <div id="signOut">
        <img src="@\assets\img\signout.png" alt="">
        <button @click="signOut">退出</button>

      </div>
      <div id="userInfo">
        <img src="@\assets\img\user.png" alt="">
        <button>管理员,{{username}}</button>

      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'home_bar',
  data () {
    return {
      username:''
    }
  },
  methods: {
    signOut(){
      // 销毁takon
      window.sessionStorage.setItem('takon','')
      // 跳转到登录页面
      this.$router.push('/login')
    }
  }

})
</script>

<style lang="scss">
  #home_bar {
    $h: 64px;
    width: 100%;
    min-width: 1220px;
    height: $h;
    background-color: #1879c4;
    padding: 0 11px 0 24px;
    color: white;
    & > *{
      height: $h;
      display: flex;
      align-items: center;
    }
    img{
      margin-right: 12px;
    }
    button,button:focus{
      background-color: #1879c4;
      border: none;
      outline:none
    }

    #logo{
      float: left;
      img{
        height: 36px;
      }
      font-size: 30px;
    }

    #userInfo{
      float: right;
      margin-right: 74px;
      img{
        width: 32px;
	      height: 32px;
      }
      font-size: 14px;
    }

    #signOut{
      float: right;
      img{
        width: 20px;
        height: 17px;
      }
      font-size: 14px;
    }
  }
</style>
