import request from "../utils/request";
import store from '../store/index'

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

  // 获取功能分类列表
  getGnflList () {
    return request({
      url: "/permission/gnfl/query",
      method: "post",
      data: {
        dwbm: store.state['userInfo']['zzdwbm']
      }
    });
  }

  // 根据fflbm获取功能分类列表
  getGnflListByFflbm (fflbm) {
    return request({
      url: "/permission/gnfl/query",
      method: "post",
      data: {
        dwbm: store.state['userInfo']['zzdwbm'],
        fflbm
      }
    });
  }

  // 根据功能名称获取功能定义
  getGndyByName (gnmc) {
    return request({
      url: "/permission/gndy/query",
      method: "post",
      data: {
        dwbm: store.state['userInfo']['zzdwbm'],
        gnmc
      }
    });
  }

  // 根据功能名称获取功能定义
  getGndyByNameAndFlbm (gnmc, flbm) {
    return request({
      url: "/permission/gndy/query",
      method: "post",
      data: {
        dwbm: store.state['userInfo']['zzdwbm'],
        gnmc,
        flbm
      }
    });
  }

  // 获取功能分类信息
  getGnflInfo (flbm) {
    return request({
      url: "/permission/gnfl/get",
      method: "post",
      data: {
        flbm
      }
    });
  }

  // 获取功能定义列表
  getGndyList (flbm) {
    return request({
      url: "/permission/gndy/query",
      method: "post",
      data: {
        dwbm: store.state['userInfo']['zzdwbm'],
        flbm
      }
    });
  }



}

export const Api = new UserApi()