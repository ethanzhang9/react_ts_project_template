import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "normalize.css";

import { theme } from "@/styles/theme";
import { ResetStyle } from "@/styles/reset";
import { CommonStyle } from "@/styles/common";
import App from "@/App";
import store from "@/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* ThemeProvider：提供主题变量给 styled-components */}
    <ThemeProvider theme={theme}>
      {/* Provider：提供 Redux store 给整个应用 */}
      <Provider store={store}>
        {/* BrowserRouter：设置路由 */}
        <BrowserRouter>
          {/* ResetStyle：全局 CSS Reset，清除浏览器默认样式 */}
          <ResetStyle />
          {/* CommonStyle：全局基础样式（字体、通用元素样式等） */}
          <CommonStyle />
          {/* App：应用主体组件 */}
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
