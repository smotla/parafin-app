const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/parafin', createProxyMiddleware({
    target: 'https://api.parafin.com',
    changeOrigin: true,
  }));
};
