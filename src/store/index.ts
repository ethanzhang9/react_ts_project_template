import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

// 从 store 本身推断 state 和 dispatch 的类型
export type TDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;

// 导出 store 对象
export default store;
