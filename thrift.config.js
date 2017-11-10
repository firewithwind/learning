/**
 * thrift配置文件。npm run thrift 生成thrift相关文件
 * artifactId: mall-${product}-[[x]api-]-client
 * request url： /thrift/${product}/${service}/${method}
 * 
 * 优先查找 /server/thrift/${product}/${service}.js 是否存在${method}方法
 *      demoMethod: {
 *          post: async function({body,query,next,service,ThriftPool,thriftPool}){
 *              return await service[method](thriftPool, param, config);
 *          }
 *      }
 * 不存在则自动按接口请求
 * 
 */

module.exports = {
    // maven中对应的jar包相关信息
    maven: [
        // {
        //     groupId: 'com.sankuai.mall.demo',
        //     artifactId: 'mall-demo-api-client',
        //     version: '1.0.0',
        //     // service对应的appkey和port
        //     services: {
        //         DemoService: {
        //             appkey: 'com.sankuai.mall.demo',
        //             port: 15001
        //         },
        //     },
        // }
    ]
};