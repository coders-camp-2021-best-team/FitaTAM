FROM node:lts-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY ./dist/apps/api .

ENV PORT=3000
EXPOSE ${PORT}

CMD node ./main.js