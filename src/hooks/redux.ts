import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from "react-redux";
import type { TDispatch, TRootState } from "@/store";

// 封装 useDispatch，指定 dispatch 的类型
export const useAppDispatch: () => TDispatch = useDispatch;
// 封装 useSelector，指定 store 的类型
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const appShallowEqual = shallowEqual;
