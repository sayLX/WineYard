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
        dlbm: dlbm,
        kl: kl,
        zzdwbm: zzdwbm
      }
    });
  }
  // 案件公开信息导入
  importCaseinfo(file:Object){
    return request({
      url:"/public/case/analysis",
      method:"post",
      data:file
    })
  }
  // 辩护代理信息导入
  importAgent(file:Object){
    return request({
      url:"/public/agent/analysis",
      method:"post",
      data:file
    })
  }
  // 案件代理获取案件人员列表
  getCaseStaffList(data: object) {
    return request({
      url: "/public/case/queryAjrylb",
      method: "post",
      data: data
    });
  }

  //辩护代理查看详情
  viewDetail(ajrybh: string) {
    return request({
      url: "/public/agent/lookdetails",
      method: "post",
      data: {
        ajrybh: ajrybh
      }
    });
  }
}

export const Api = new UserApi();
