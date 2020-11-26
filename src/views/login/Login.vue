<template>
  <div id="index">
    <!-- <img src="~@/assets/img/登录bg.jpg" alt=""> -->
    <div id="login">
      <input type="text" />
      <a-button type="primary">
        Primary
      </a-button>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'login',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
#index {
  min-width: 1920px;
  height: 1080px;
  position: relative;

  #login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  background-image: url("~@/assets/img/登录bg.jpg");
  background-size: cover;
}
</style>
