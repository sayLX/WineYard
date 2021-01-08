import request from "../utils/request";
import store from "../store/index";

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

  // 开发人员--刘鑫  共16个接口
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
  getOrganization(data: {
    curent: number;
    gzzh: string;
    mc: string;
    size: number;
    zzdwbm: string;
  }) {
    data["zzdwbm"] = store.state["userInfo"]["zzdwbm"];
    return request({
      url: "/organization/user/query",
      method: "post",
      data: data
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
      data: { rybm: rybm }
    });
  }
  // 重置人员密码
  resetPersonPassword(rybm: string) {
    return request({
      url: "/organization/user/resetPwd",
      method: "post",
      data: { rybm: rybm }
    });
  }
  // 编辑人员信息
  editPersonInfo(data: {
    dhhm: "13512345678";
    dlbm: string;
    dzyj: string;
    gzzh: string;
    mc: string;
    rybm: string;
    sflsry: string;
    sftz: string;
    sfzh: string;
    xb: string;
    xh: number;
    zzdwbm: string;
  }) {
    data.zzdwbm = store.state["userInfo"]["zzdwmc"];
    return request({
      url: "/organization/user/update",
      method: "post",
      data: data
    });
  }

  // 获取模板分类列表
  getTemplateClassList(data: object) {
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
  getLawyerList(data: {
    lszh: string;
    pageIndex: number;
    pageSize: number;
    startIndex: number;
    xm: string;
    zzdw: string;
  }) {
    // data.zzdw = store.state["userInfo"]["zzdwmc"];
    return request({
      url: "/message/lawyer/query",
      method: "post",
      data: data
    });
  }
  // 删除律师
  deleteLawyer(lsbm: string) {
    return request({
      url: "/message/lawyer/delete",
      method: "post",
      data: lsbm
    });
  }
  // 添加
  addLawyer(data: {
    dhhm: "电话号码";
    dlbm: string;
    dzyj: string;
    gzzh: string;
    mc: string;
    sflsry: string;
    sfzh: string;
    xb: string;
    xh: string;
    zzdwbm: string;
    zzdwmc: string;
  }) {
    return request({
      url: "/message/lawyer/add",
      method: "post",
      data: data
    });
  }
  // 组织机构
  // 获取部门信息
  getDepartmentInfo(data: { bmbm: string; dwbm: string }) {
    return request({
      url: "/organization/dept/get",
      method: "post",
      data: data
    });
  }
  // 获取人员角色分配列表
  getPersonRoleList(data: {
    bmbm: string;
    dwbm: string;
    jsbm: string;
    mc: string;
    pageIndex: number;
    pageSize: number;
  }) {
    data.dwbm = store.state["userInfo"]["zzdwbm"];
    return request({
      url: "/organization/usergroup/query",
      method: "post",
      data: data
    });
  }
  // 获取角色信息
  getRoleInfo(data: { bmbm: string; dwbm: string; jsbm: string }) {
    data.dwbm = store.state["userInfo"]["zzdwbm"];
    return request({
      url: "/organization/role/get",
      method: "post",
      data: data
    });
  }
  // 添加角色
  addRole(data: {
    bmbm: string;
    dwbm: string;
    jsmc: string;
    jsxh: number;
    spjsbm: string;
  }) {
    return request({
      url: "/organization/role/add",
      method: "post",
      data: data
    });
  }
  // 修改角色信息
  editRole(data: {
    bmbm: string;
    dwbm: string;
    jsbm: string;
    jsmc: string;
    jsxh: number;
    spjsbm: string;
  }){
    return request({
      url: "/organization/role/update",
      method: "post",
      data: data
    });
  };
  //查询权限
  queryRight(data: { bmbm: string; dwbm: string; jsbm: string }) {
    return request({
      url: "/permission/role/get",
      method: "post",
      data: data
    });
  }
  // 编辑权限
  editRight(data: 	{
		"bmbm": string,
		"dwbm": string,
		"gnbm": string,
		"jsbm": string
	}) {
    return request({
      url: "/permission/role/add",
      method: "post",
      data: data
    });
  }
  // 删除角色
  deleteRole(data: { bmbm: string; dwbm: string; jsbm: string }) {
    return request({
      url: "/organization/role/delete",
      method: "post",
      data: data
    });
  }
  // 添加部门
  addDeparment(data: {
    bmmc: string;
    dwbm: string;
    bz: string;
    bmxh: number;
    fbmbm: string;
  }) {
    return request({
      url: "/organization/dept/add",
      method: "post",
      data: data
    });
  }
  // 编辑部门
  editDeparment(data: {
    bmmc: string;
    dwbm: string;
    bz: string;
    bmxh: number;
    bmbm: string;
  }) {
    return request({
      url: "/organization/dept/update",
      method: "post",
      data: data
    });
  }
  // 删除部门
  deleteDeparment(data: { bmbm: string; dwbm: string }) {
    return request({
      url: "/organization/dept/delete",
      method: "post",
      data: data
    });
  }

  // 获取单位部门列表
  getBmList(bmmc = "", fbmbm = "") {
    return request({
      url: "/organization/dept/query",
      method: "post",
      data: {
        dwbm: store.state["userInfo"]["zzdwbm"],
        bmmc,
        fbmbm
      }
    });
  }

  // 获取单位信息
  getDwInfo() {
    return request({
      url: "/organization/unit/get",
      method: "post",
      data: {
        dwbm: store.state["userInfo"]["zzdwbm"]
      }
    });
  }

  // 获取单位角色列表
  getJsList(bmbm) {
    return request({
      url: "/organization/role/query",
      method: "post",
      data: {
        dwbm: store.state["userInfo"]["zzdwbm"],
        bmbm
      }
    });
  }

  // 获取功能分类列表
  getGnflList() {
    return request({
      url: "/permission/gnfl/query",
      method: "post",
      data: {
        dwbm: store.state["userInfo"]["zzdwbm"]
      }
    });
  }

  // 根据fflbm获取功能分类列表
  getGnflListByFflbm(fflbm) {
    return request({
      url: "/permission/gnfl/query",
      method: "post",
      data: {
        dwbm: store.state["userInfo"]["zzdwbm"],
        fflbm
      }
    });
  }

  // 根据功能名称获取功能定义
  getGndyByName(gnmc) {
    return request({
      url: "/permission/gndy/query",
      method: "post",
      data: {
        dwbm: store.state["userInfo"]["zzdwbm"],
        gnmc
      }
    });
  }

  // 根据功能名称获取功能定义
  getGndyByNameAndFlbm(gnmc, flbm) {
    return request({
      url: "/permission/gndy/query",
      method: "post",
      data: {
        dwbm: store.state["userInfo"]["zzdwbm"],
        gnmc,
        flbm
      }
    });
  }

  // 获取功能分类信息
  getGnflInfo(flbm) {
    return request({
      url: "/permission/gnfl/get",
      method: "post",
      data: {
        flbm
      }
    });
  }

  // 获取功能定义列表
  getGndyList(flbm) {
    return request({
      url: "/permission/gndy/query",
      method: "post",
      data: {
        dwbm: store.state["userInfo"]["zzdwbm"],
        flbm
      }
    });
  }

  // 添加功能分类(根目录)
  addGnfl(data) {
    data.dwbm = store.state["userInfo"]["zzdwbm"];
    data.fltb = "fltb.jpg1";
    data.flxh = 1;
    return request({
      url: "/permission/gnfl/add",
      method: "post",
      data: data
    });
  }

  //编辑功能分类
  editGnfl(fflbm, flbm, flmc) {
    return request({
      url: "/permission/gnfl/update",
      method: "post",
      data: {
        dwbm: store.state["userInfo"]["zzdwbm"],
        fltb: "fltb.jpg1",
        flxh: 1,
        flmc
      }
    });
  }

  // 删除功能分类
  delGnfl(flbm) {
    return request({
      url: "/permission/gnfl/delete",
      method: "post",
      data: {
        flbm
      }
    });
  }

  // 删除功能定义
  delGndy(gnbm) {
    return request({
      url: "/permission/gndy/delete",
      method: "post",
      data: {
        gnbm
      }
    });
  }

  // 添加功能定义
  addGndy(data) {
    data.dwbm = store.state["userInfo"]["zzdwbm"];
    return request({
      url: "/permission/gndy/add",
      method: "post",
      data: data
    });
  }
}
export const Api = new UserApi();
