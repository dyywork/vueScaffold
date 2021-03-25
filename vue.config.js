const path = require('path');

module.exports = {
  /* css: {
    loaderOptions: {
      less: {
        modifyVars: {
          red: '#03a9f4',
          blue: '#3eaf7c',
          orange: '#f08d49',
          'text-color': '#111'
        }
      }
    }
  }, */
  configureWebpack: {
    performance: {
      hints: false,
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.join(__dirname, 'src'))
  },

  /* devServer: {
    proxy: {
      '/api': {
        target: 'https://www.apiopen.top', //对应自己的接口/journalismApi
        secure: false,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  } */
};
