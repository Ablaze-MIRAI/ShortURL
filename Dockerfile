FROM node:18.16.0-alpine3.17

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

RUN yarn mg:dep

CMD [ "yarn", "start" ]
