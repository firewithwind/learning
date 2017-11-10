#!/bin/bash
export HOME=/home/sankuai
source /home/sankuai/.bashrc
set -e

echo "Env is : ${NODE_ENV}"

echo "=============================================================================================="
echo "安装基础前端环境:"

if ! command -v nvm; then
    echo "install nvm..."
    curl -o- http://msstest-corp.sankuai.com/v1/mss_8bRwWktb50SCeRnoImr9GA==/nvm/install-nvm.sh | bash
    source /home/sankuai/.bashrc
fi

# NVM_NODEJS_ORG_MIRROR=http://npm.sankuai.com/dist/nodejs
nvm install 8.5
nvm use 8.5

npm list -g pm2 --depth=0 || npm --registry=http://r.npm.sankuai.com install pm2 -g
# npm list -g yarn --depth=0 || npm --registry=http://r.npm.sankuai.com install yarn -g
