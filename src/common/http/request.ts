// @ts-ignore
import axios from "./httpBase";
import {AxiosResponse} from "axios";

interface HttpRequest {
  url: string;
  data?: object;
  params?: object;
  headers?: object;
  showLoading?: boolean;
  method?: "POST" | "GET";

  loadingSelector?: string;
}

interface HttpResponse {
  success?: boolean;
  code?: string;
  data?: object | Array<any>;
  message?: string;
  traceId?: string;
}

const request = (config: HttpRequest) => {
  if (!config) {
    return;
  }
  const configHeaders = config.headers || {};
  const defaultHeaders = axios.defaults.headers;

  config.showLoading = typeof config.showLoading === "undefined" ? true : config.showLoading;
  config.headers = Object.assign(
    defaultHeaders,
    configHeaders
  );
  return axios(config);
}

const post = (config: HttpRequest) => {
  return new Promise<any>((resolve, reject) => {
    request({
      ...config,
      method: "POST"
    })?.then((res: HttpResponse) => {
      if (res) {
        if (res.success) {
          resolve(res.data);
        } else {
          reject(res.message || "")
        }
      }
    }).catch((err) => {
      reject(err && err.message ? err.message : "请求失败");
    });
  });
}

const get = (config: HttpRequest) => {
  return new Promise<any>((resolve, reject) => {
    request({
      ...config,
      method: "GET"
    })?.then((res: HttpResponse) => {
      if (res) {
        if (res.success) {
          resolve(res.data);
        } else {
          reject(res.message || "")
        }
      }
    }).catch((err) => {
      reject(err && err.message ? err.message : "请求失败");
    });
  });
}

export {
  post,
  get
};
