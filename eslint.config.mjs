import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // ———————————————————— TypeScript ————————————————————
  // 使用 @typescript-eslint 推荐规则，适用于所有 TS/TSX 文件
  tseslint.configs.recommended,

  // ———————————————————— React ————————————————————
  // 使用 eslint-plugin-react 推荐的 flat config 规则，适用于所有 React 文件（JSX/TSX）
  pluginReact.configs.flat.recommended,

  // ———————————————————— eslint-config-prettier ————————————————————
  // 关闭与 Prettier 冲突的 ESLint 规则，避免格式化冲突
  eslintConfigPrettier,

  // ———————————————————— JS + 浏览器 + Node 环境 + Prettier ————————————————————
  {
    // 匹配所有 JS/TS/JSX/TSX 文件
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

    // 注册插件
    // - js: 用于基础 JS 推荐规则
    // - prettier: 启用 eslint-plugin-prettier
    plugins: { js, prettier: pluginPrettier },

    // 扩展 js/recommended 配置
    extends: ["js/recommended"],

    // 设置全局变量
    // - globals.browser: 浏览器环境全局变量（window、document 等）
    // - globals.node: Node.js 环境全局变量（process、__dirname 等）
    languageOptions: { globals: { ...globals.browser, ...globals.node } },

    // 规则配置
    rules: {
      // 继承 js/recommended 的规则
      ...js.configs.recommended.rules,

      // 关闭原生的 no-unused-vars
      "no-unused-vars": "off",

      // 使用 TS 版本（允许 _ 前缀变量，避免接口误报）
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true
        }
      ],

      // 启用 prettier 报错，文件不符合 Prettier 格式时会报错
      "prettier/prettier": "error",
      // 关闭 TS 的 no-require-imports 规则，允许使用 require()
      "@typescript-eslint/no-require-imports": "off",
      // 关闭 TS 的 no-explicit-any， 允许使用 any
      "@typescript-eslint/no-explicit-any": "off",
      // 关闭 TS 的 no-empty-object-type，允许使用 {}
      "@typescript-eslint/no-empty-object-type": "off"
    }
  }
]);
