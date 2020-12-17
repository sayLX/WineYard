import request from "../utils/request";

class UserApi {
  //注册
  sign(username: string, password: string) {
    return request({
      url: "/api/user/sign/",
      method: "post",
      data: {
        username: username,
        password: password
      }
    });
  }

  //登陆
  login(dlbm: string, kl: string, zzdwbm: string) {
    return request({
      url: "/organization/user/login",
      method: "post",
      data: {
        "dlbm": dlbm,
        "kl": kl,
        "zzdwbm": zzdwbm
      }
    });
  }
}

export const Api = new UserApi()