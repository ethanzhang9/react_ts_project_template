// 获取环境变量
const { REACT_APP_BASE_URL: BASE_URL, REACT_APP_TIMEOUT: TIMEOUT } =
  process.env;
// 导出配置
export { BASE_URL, TIMEOUT };
