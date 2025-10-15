/// <reference types="react-scripts" />

// 声明环境变量
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string;
    readonly REACT_APP_TIMEOUT: number;
  }
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}
