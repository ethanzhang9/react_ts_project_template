import "styled-components";
import type { AppTheme } from "@/styles/theme";

declare module "styled-components" {
  // 设置默认主题的类型
  export interface DefaultTheme extends AppTheme {}
}
