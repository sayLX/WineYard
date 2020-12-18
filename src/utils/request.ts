import axios from "axios";
axios.defaults.baseURL = "/api";

const service = axios.create({
  timeout: 10000
});

service.interceptors.request.use(
  config => {
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