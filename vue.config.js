module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/index.scss";',
      },
    },
  },
  devServer: {
    port: 4399,
    https: false,
    open: true,
    proxy: {
      '/mock': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/mock': '',
        },
      },
    },
  },
};
