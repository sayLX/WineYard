import request from "../utils/request";

export class UserApi {
  private baseUrl: string | undefined
  constructor(url: string) {
    this.baseUrl = url;
  }

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
  login(username: string, password: string) {
    return request({
      url: "/api/user/login/",
      method: "post",
      data: {
        username: username,
        password: password
      }
    });
  }
}