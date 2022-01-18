#!/bin/sh

ssh root@1data.hu << EOF
echo /usr/src/jenkins/$JOB_NAME
rm -rf /usr/src/jenkins/$JOB_NAME
mkdir -p /usr/src/jenkins/$JOB_NAME

EOF


echo copy files to remote
scp -r * root@1data.hu:/usr/src/jenkins/$JOB_NAME



ssh root@1data.hu << EOF
export EMAIL_PASSWORD="94kTKndIxz"
cd /usr/src/jenkins/$JOB_NAME
bash ./wp.sh
docker-compose down -v --remove-orphans
docker image prune -f
docker-compose up --build -d 

EOF