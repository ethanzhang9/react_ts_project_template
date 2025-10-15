const path = require("path");

// 绝对路径拼接
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  // 配置别名
  webpack: {
    alias: {
      "@": resolve("src")
    }
  }
};
