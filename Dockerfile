FROM node:13-alpine

WORKDIR /app
COPY . .
CMD yarn install

EXPOSE 3000
ENTRYPOINT [ "bin/index.js" ]
