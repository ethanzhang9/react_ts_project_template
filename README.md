# React + TS

> **React + TypeScript + Redux + React Router + styled-components** 的前端模板，同时集成了**网络请求、全局样式和代码规范工具**。

## 技术栈

| 功能模块   | 库 / 工具                   | 说明                                             |
| ---------- | --------------------------- | ------------------------------------------------ |
| 脚手架     | `create-react-app`          | 官方脚手架，用于初始化 React 项目                |
| 配置扩展   | `@craco/craco`              | 扩展 CRA 脚手架隐藏的 webpack 配置               |
| 前端框架   | `react` / `react-dom`       | 构建组件化 UI                                    |
| 类型检查   | `typescript`                | 静态类型检查和类型安全                           |
| 状态管理   | `@reduxjs/toolkit`          | Redux 官方工具包，提供全局状态管理和异步操作支持 |
| React 集成 | `react-redux`               | 将 Redux store 与 React 组件绑定                 |
| 路由管理   | `react-router-dom`          | 前端路由和页面导航                               |
| 样式处理   | `styled-components`         | 组件级 CSS-in-JS 和主题化管理                    |
| 样式重置   | `normalize.css`             | 清除浏览器默认样式差异                           |
| 网络请求   | `axios`                     | 封装 HTTP 请求和接口调用                         |
| 代码规范   | `eslint`, `prettier` + 插件 | 代码格式化和规范检查                             |

## 目录结构

```
react_ts_project_template/
├── public/                     # 静态资源目录（不会被 webpack 处理）
│   ├── favicon.ico             # 浏览器标签页图标
│   ├── index.html              # 应用的 HTML 模板文件（唯一入口）
│   ├── logo192.png             # 默认 logo (用于 PWA / manifest)
│   ├── logo512.png             # 默认 logo (用于 PWA / manifest)
│   ├── manifest.json           # PWA 配置文件（应用名称、图标、主题色等）
│   └── robots.txt              # 搜索引擎爬虫配置文件
│
├── src/                        # 源代码目录（主要开发目录）
│   ├── assets                  # 静态资源（图片、字体、图标等）
│   ├── base-ui                 # 基础 UI 组件（全局通用的 loading、按钮、弹窗等）
│   │   └── loading             # loading 组件示例
│   ├── components              # 业务通用组件
│   ├── hooks                   # 自定义 React Hooks
│   │   └── redux.ts            # Redux 相关的自定义 Hook
│   ├── router                  # 路由管理
│   │   └── index.tsx           # 路由配置文件
│   ├── service                 # 网络请求相关
│   │   ├── config              # 接口配置、常量、baseURL 等
│   │   ├── request             # 封装 axios 请求类 / 实例
│   │   └── index.ts            # 对外统一导出网络请求 API
│   ├── store                   # Redux 状态管理
│   │   ├── modules             # 各业务模块的 state / reducer / slice
│   │   └── index.ts            # Redux store 创建与合并 reducer
│   ├── styles                  # 全局样式和主题
│   │   ├── common.ts           # 通用全局样式（字体、按钮、排版等）
│   │   ├── reset.ts            # CSS Reset 样式
│   │   └── theme.ts            # 主题变量（颜色、字体、间距等）
│   ├── types                   # 类型声明
│   │   └── styled.d.ts         # styled-components 主题类型扩展
│   ├── utils                   # 工具函数
│   ├── views                   # 页面级组件
│   │   ├── not-found           # 404 页面
│   │   └── test                # 测试页面 / 示例页面
│   ├── App.tsx                 # App 根组件（默认示例）
│   ├── index.tsx               # React 入口文件，挂载到 public/index.html 的 #root
│   └── react-app-env.d.ts      # CRA 环境类型声明
│
├── .gitignore                  # Git 忽略规则
├── .editorconfig               # 编辑器统一配置
├── .env.development            # 开发环境变量
├── .env.production             # 生产环境变量
├── .prettierignore             # Prettier 忽略文件配置
├── .prettierrc                 # Prettier 配置
├── craco.config.js             # CRACO 配置（覆盖 CRA 默认 webpack 配置）
├── eslint.config.mjs           # ESLint 配置
├── package-lock.json           # 依赖锁定文件，保证版本一致
├── package.json                # 项目配置文件（依赖、脚本、项目元信息）
├── README.md                   # 项目说明文档
└── tsconfig.json               # TypeScript 配置
```
