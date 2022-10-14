echo "---------docker Login--------"
docker login --username=$1 registry.cn-hangzhou.aliyuncs.com --password=$2
echo -e "---------docker Stop--------"
docker stop music-h5
echo -e "---------docker Rm--------"
docker rm music-h5
docker rmi registry.cn-hangzhou.aliyuncs.com/lixin94/lx-music:latest
echo -e "---------docker Pull--------"
docker pull registry.cn-hangzhou.aliyuncs.com/lixin94/lx-music:latest
echo -e "---------docker Create and Start--------"
docker run --rm -d -p 8080:80 --name music-h5 registry.cn-hangzhou.aliyuncs.com/lixin94/lx-music:latest
echo -e "---------deploy Success--------"
