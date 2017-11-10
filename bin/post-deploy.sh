#!/bin/bash
export HOME=/home/sankuai
source /home/sankuai/.bashrc
set -e

chmod +x ./bin/install.sh
./bin/install.sh

source /home/sankuai/.bashrc

# yarn

if [ "$PURENODE" = "1" ];then
    echo "pure mode, without pm2";
    # export PM2_HOME="/home/sankuai/.pm2"
    # pm2 kill

    NODE_ENV=$NODE_ENV node server/index.js

else
    export PM2_HOME="/home/sankuai/.pm2"
    pm2 kill
    pm2 startOrGracefulReload ./server/pm2.json --env $NODE_ENV

    pm2 install pm2-logrotate
    # pm2 set pm2-logrotate:max_size 10M
    # pm2 set pm2-logrotate:interval 30
    pm2 set pm2-logrotate:rotateInterval "59 59 23 * * *"
    # pm2 set pm2-logrotate:retain "all"
    # pm2 set pm2-logrotate:dateFormat "YYYY-MM-DD"
    exec pm2 log

fi
