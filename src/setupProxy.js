const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://service-leygnxze-1304088100.gz.apigw.tencentcs.com/test",
      changeOrigin: true,
    })
  );
};
