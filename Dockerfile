FROM nginx
COPY ./dist/ /home/my-music/h5
# 第一步nginx配置文件名称
COPY ./default.conf /usr/local/nginx/conf.d/my-music.conf
EXPOSE 80
