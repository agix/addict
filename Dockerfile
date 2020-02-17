FROM node:13-alpine

CMD apk add git

WORKDIR /app
COPY . .
CMD git clean -xdf
CMD yarn install

EXPOSE 3000
ENTRYPOINT [ "bin/index.js" ]
