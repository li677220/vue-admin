const path = require("path");
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  //eslint-loader是否在保存时检查
  lintOnSave: false,

  //webpack配置
  chainWebpack: (config) => {},
  configureWebpack: (config) => {
    config.resolve = {
      // 自动添加文件后缀名
      extensions: ['.js','.json','.vue'],
      alias: {
        '@': path.resolve(__dirname,'./src'),
        'public': path.resolve(__dirname,'./public'),
        'components': path.resolve(__dirname,'./src/components'),
        'common': path.resolve(__dirname,'./src/common'),
        'api': path.resolve(__dirname,'./src/api'),
        'views': path.resolve(__dirname,'./src/views'),
        'data': path.resolve(__dirname,'./src/data'),
      }
    }
  },
  // 生产环境是否需要生成map文件
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启css map
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // css modules for all css / pre-processor files
    requireModuleExtension: true
  },
  // parallet: require('os').cpus.length > 1,
  pwa: {},
  // webpack-dev-derver相关配置
  devServer: {
    open: false, //编译完成是否打开网页
    host: '0.0.0.0', //指定使用地址，localhost，0.0.0.0代表可以被外界访问
    port: 8080, //访问端口
    https: false, //编译失败时刷新界面
    hot: true, //开启热加载
    hotOnly: false, //
    proxy: null, //代理
    overlay: { //全屏模式下是否显示脚本错误
      warninggs: true,
      errors: true
    },
    // before = () => {}
   },
  // 第三方配置加载
   pluginOptions: {},
  //  configureWebpack: {
	// 	externals: {
	// 		"vue": "Vue",
	// 		"vue-router": "VueRouter",
	// 		"vuex": "Vuex",
	// 	}
	// }

}