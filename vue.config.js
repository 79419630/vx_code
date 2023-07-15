const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: "localhost", // 项目运行的ip
    port: 8888, // 项目运行的端口号
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/common/css/base.scss";`,
      },
    },
  },
});
