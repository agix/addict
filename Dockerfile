FROM node:13-alpine

RUN apk update && apk upgrade && apk add --no-cache git

WORKDIR /app
COPY . .
RUN git clean -xdf
RUN yarn install

EXPOSE 3000
ENTRYPOINT [ "bin/index.js" ]
