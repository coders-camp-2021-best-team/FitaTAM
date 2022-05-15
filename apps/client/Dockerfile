FROM node:lts-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build:client


FROM node:lts-alpine as development

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . /app

ENV NODE_ENV="development"
ENV PORT=80
EXPOSE ${PORT}

CMD yarn nx serve client --host=0.0.0.0 --port=80


FROM nginx:latest as production

WORKDIR /app

COPY --from=build /app/dist/apps/client .

COPY --from=build /app/apps/client/nginx.conf /etc/nginx/conf.d/default.conf