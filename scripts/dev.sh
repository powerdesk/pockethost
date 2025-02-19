#!/bin/bash

set -a
source .env
DEBUG=1
set +a

pm2 stop all
docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
pnpm dev