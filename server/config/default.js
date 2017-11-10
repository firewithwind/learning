const path = require('path');
const projectConfig = require('../../project.config');

module.exports = {
    projectConfig: projectConfig,

    // 在octo上的业务appKey, 需手动填写
    appKey: projectConfig.appKey,
    // 启动端口，PORT优先
    port: +process.env.PORT || 8418,
    // 请求前缀
    urlPrefix: projectConfig.urlPrefix || '',

    // auth登录验证，0 = 0 不开启；2 = 10 sso；3 = 11 sso+upm
    enableAuth: 3,
    // sso相关
    ssoHost: 'http://develop.sso.test.sankuai.info',
    ssoApiHost: 'http://develop.sso.test.sankuai.info',

    ssoAppkey: 'mall.fe.pc',
    ssoSecret: 'd8613751fcd2189ff0e7ddfb0bee6332',
    ssoSalt: '0d8c65ea4257a0701b398ba5627aab3ad747a7bd9ed043be54b5794e20595fc94661b6f9751c9c0c',

    // upm相关
    upmHost: 'http://release.upm.test.sankuai.info',
    upmPrefix: '/__mallpc__',
    
    // 路径、path相关
    enableUtils: true,

    enableDefaultActions: true,
    actionsDir: path.resolve(__dirname, '../actions'),

    enableThrift: true,
    thriftPrefix: "/thrift",
    thriftDir: path.resolve(__dirname, '../thrift'),

    assetDir: path.resolve("static"),
    assetDirAbsolute: path.join(__dirname, '../../static'),

    apiConfig: null,

    mainHtml: "index.html",
};
