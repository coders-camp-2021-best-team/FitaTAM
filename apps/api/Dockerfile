FROM node:lts-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build:api


FROM node:lts-alpine as production

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

COPY --from=build /app/dist/apps/api .

ENV NODE_ENV="production"
ENV PORT=80
EXPOSE ${PORT}

CMD node ./main.js


FROM node:lts-alpine as development

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . /app

ENV NODE_ENV="development"
ENV PORT=80
EXPOSE ${PORT}

CMD yarn nx serve api --host=0.0.0.0