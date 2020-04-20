在 ice 和 vue-admin 之间犹豫了好久，最终，还是决定先用 vue + ts 吧，之后应该还是会把 vue 捡起来。
dockerFile 1
FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
改进
只需要 重启 nginx 就好
通过挂在的方式完成
