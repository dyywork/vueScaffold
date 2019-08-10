const path = require('path');

function resolve(dir) {
  return path.join(__dirname,dir);
}

module.exports = {
  configureWebpack: {
    performance: {
      hints: false,
    }
  },
  chainWebpack: (config)=>{
    config.resolve.alias.set('@', path.join(__dirname,'src'))
  }
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
}
