import request from "../utils/request";
import store from "@/store";

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
  importCaseinfo(filepath: string) {
    return request({
      url: "/public/case/analysis",
      method: "post",
      data: filepath
    });
  }
  // 辩护代理信息导入
  importAgent(filePath: string) {
    return request({
      url: "/public/agent/analysis",
      method: "post",
      data: filePath
    });
  }
  // 辩护代理获取案件人员列表
  getCaseStaffList(data: object) {
    return request({
      url: "/public/case/queryAjrylb",
      method: "post",
      data: data
    });
  }
  // 辩护代理绑定
  bindAgent(data: object) {
    return request({
      url: "/public/agent/binding",
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

  // 获取单位人员列表（人员管理）
  getOrganization(data: object) {
    return request({
      url: "/organization/user/query",
      method: "post",
      data: {
        curent: data.curent,
        gzzh: data.gzzh,
        mc: data.mc,
        order: data.order,
        size: data.size,
        zzdwbm: store.state["userInfo"]["zzdwbm"]
      }
    });
  }
  // 添加人员
  addPersonInfo(infolist: {}) {
    return request({
      url: "/organization/user/add",
      method: "post",
      data: infolist
    });
  }
  // 删除人员信息
  deletePersonInfo(rybm: string) {
    return request({
      url: "/organization/user/delete",
      method: "post",
      data: rybm
    });
  }
  // 重置人员密码
  resetPersonPassword(rybm: string) {
    return request({
      url: "/organization/user/resetPwd",
      method: "post",
      data: rybm
    });
  }
  // 编辑人员信息
  editPersonInfo(data: {}) {
    return request({
      url: "/organization/user/update",
      method: "post",
      data: data
    });
  }
  // 获取模板分类列表
  getTemplateClassList(data: { dwbm: string; mblbbm: string }) {
    data.dwbm = store.state["userInfo"]["zzdwbm"];
    return request({
      url: "/message/mbfl/query",
      method: "post",
      data: data
    });
  }

  // 添加模板分类
  addTemplateClass(data: object) {
    return request({
      url: "/message/mbfl/add",
      method: "post",
      data: data
    });
  }

  // 获取律师列表
  getLawyerList(data: {lszh: string,pageIndex: number,pageSize: number,startIndex: number,xm: string,zzdw: string,
  }) {
    // data.zzdw = store.state["userInfo"]["zzdwmc"];
    return request({
      url: "/message/lawyer/query",
      method: "post",
      data: data
    });
  }
  // 删除律师
  deleteLawyer(lsbm:string){
    return request({
      url: "/message/lawyer/delete",
      method: "post",
      data: lsbm
    })
  }
  // 添加
  addLawyer(data:{dhhm: '电话号码',dlbm: string,dzyj: string,gzzh: string,mc: string,sflsry: string,sfzh: string,xb: string ,xh: string,zzdwbm: string,zzdwmc: string}){
    return request({
      url: "/message/lawyer/add",
      method: "post",
      data: data
    })
  }
}

export const Api = new UserApi();
