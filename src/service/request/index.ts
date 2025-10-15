import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig
} from "axios";
import type { IRequestConfig } from "./type";

/**
 * Axios 封装
 * 支持：
 *  1. 全局拦截器
 *  2. 实例拦截器（针对特定 Request 实例）
 *  3. 单次请求拦截器
 *  4. 泛型返回类型
 */
class Request {
  instance: AxiosInstance;

  constructor(config: IRequestConfig) {
    // 创建 axios 实例
    this.instance = axios.create(config);

    // ===== 全局拦截器 =====
    // 拦截请求
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        return config;
      },
      (err) => Promise.reject(err)
    );
    // 拦截响应
    this.instance.interceptors.response.use(
      (res) => res.data, // 统一返回 data
      (err) => Promise.reject(err)
    );

    // ===== 实例拦截器 =====
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    );
  }

  /**
   * 核心 request 方法
   * 支持单次请求拦截器
   */
  request<T = any>(config: IRequestConfig<T>): Promise<T> {
    // 单次请求拦截器
    if (config.interceptors?.requestSuccessFn) {
      const internalConfig = this.transformToInternalConfig(config);
      config = config.interceptors.requestSuccessFn(internalConfig);
    }
    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应拦截器
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  }

  // ===== 简化 get/post/put/delete 调用 =====
  get<T = any>(
    url: string,
    config?: Omit<IRequestConfig<T>, "url" | "method">
  ) {
    return this.request<T>({ ...config, url, method: "GET" });
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: Omit<IRequestConfig<T>, "url" | "method" | "data">
  ) {
    return this.request<T>({ ...config, url, method: "POST", data });
  }

  put<T = any>(
    url: string,
    data?: any,
    config?: Omit<IRequestConfig<T>, "url" | "method" | "data">
  ) {
    return this.request<T>({ ...config, url, method: "PUT", data });
  }

  delete<T = any>(
    url: string,
    config?: Omit<IRequestConfig<T>, "url" | "method">
  ) {
    return this.request<T>({ ...config, url, method: "DELETE" });
  }

  patch<T = any>(
    url: string,
    data?: any,
    config?: Omit<IRequestConfig<T>, "url" | "method" | "data">
  ) {
    return this.request<T>({ ...config, url, method: "PATCH", data });
  }

  // 转 InternalAxiosRequestConfig
  private transformToInternalConfig(
    config: AxiosRequestConfig
  ): InternalAxiosRequestConfig {
    return {
      ...config,
      method: config.method ?? "get",
      headers: config.headers ?? {},
      url: config.url ?? ""
    } as InternalAxiosRequestConfig;
  }
}

export default Request;
