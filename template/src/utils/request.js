import axios from "axios";

const NODE_ENV = process.env.NODE_ENV || "development";
const intance = axios.create({
  baseURL: NODE_ENV === "development" ? "/api" : "//mgt.banksteel.com/expence/api",
  timeout: 10000
});

intance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 返回状态判断(添加响应拦截器)
intance.interceptors.response.use(
  res => {
    if (res.data) {
      res.data.success = Number(res.data.code) === 1;
    }
    return res.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export const http = {
  get(url, params, config = {}) {
    return intance.get(url, {params, ...config});
  },
  post(url, data, config = {}) {
    return intance.post(url, {data, ...config});
  },
  put(url, data, config = {}) {
    return intance.put(url, {data, ...config});
  },
  delete(url, data, config = {}) {
    return intance.delete(url, {data, ...config});
  }
};

export const myAxios = intance;
