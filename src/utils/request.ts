import axios from "axios";
axios.defaults.baseURL = "http://192.168.1.19:9990/";
import store from '@/store/index'
const sessionToken = sessionStorage.getItem('user_info') ? sessionStorage.getItem('user_info')['token'] : null
const service = axios.create({
  timeout: 10000
});

service.interceptors.request.use(
  config => {
    // 请求时在头部加上token
    config.headers = {
      token: store.getters['token'] || sessionToken || ""
    }
    console.log(config)
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(new Error("errorMsg"));
  }
);

service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log(error);
    return Promise.reject(new Error("errorMsg"));
  }
);

export default service;
