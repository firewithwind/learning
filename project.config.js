/**
 * 项目配置, 与默认配置进行合并
 * {
 *     title: <string>,
 *     dllEntry: {} || [],
 *     pathConfig: {}
 * }
 */

module.exports = {
    // appkey，必填
    // appKey: (() => {throw 'appkey is required, example: com.sankuai.mall.fe.pc'})(),
    appKey: 'sassa',
    title: '',
    urlPrefix: '/base',
    publicPath: '/base',
 
    thriftConfig: require('./thrift.config')
}
