#!/usr/bin/env bash
set -e

if [ -z $NODE_ENV ];then
    NODE_ENV="dev"
fi

echo "=============================================================================================="
echo "打包环境: $NODE_ENV"
echo "=============================================================================================="

echo "安装依赖..."
yarn
yarn cache dir
npm rebuild node-sass

echo "正在生成thrift文件，请与后端确认jar包版本号"
NODE_ENV=$NODE_ENV npm run thrift

echo "开始打包..."
NODE_ENV=$NODE_ENV npm run build
echo "打包成功!"
