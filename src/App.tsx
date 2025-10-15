import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import router from "@/router";
import Loading from "./base-ui/loading";

const App = memo(function App() {
  return (
    <div>
      {/* 应用路由，并设置路由懒加载的应急方案 */}
      <Suspense fallback={<Loading />}>
        <main className="main">{useRoutes(router)}</main>
      </Suspense>
    </div>
  );
});

export default App;
