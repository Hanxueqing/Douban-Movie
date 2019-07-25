module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    //lintOnSave: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => { },
    configureWebpack: () => { },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {//反向代理的方式解决跨域
            "/api":{
                target:"http://47.96.0.211:9000", //目标域名
                changeOrigin:true,//是否改变域名
                pathRewrite:{//以什么开头
                    "^/api":""
                }
            },
            "/data": {
                target: "http://118.31.109.254:8088", //目标域名
                changeOrigin: true,//是否改变域名
                pathRewrite: {//以什么开头
                    "^/data": ""
                }
            },
            "/douban": {
                target: "http://39.96.84.220:9000", //目标域名
                changeOrigin: true,//是否改变域名
                pathRewrite: {//以什么开头
                    "^/douban": ""
                }
            }
        }, // 设置代理
        before: app => { }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}