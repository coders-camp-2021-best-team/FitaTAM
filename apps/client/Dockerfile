FROM nginx:latest

WORKDIR /app

COPY ./dist/apps/client .

COPY ./apps/client/nginx.conf /etc/nginx/conf.d/default.conf