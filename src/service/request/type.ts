import type {
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig
} from "axios";

// 针对AxiosRequestConfig配置进行扩展
export interface IInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (err: any) => any;
}

export interface IRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IInterceptors<T>;
}
