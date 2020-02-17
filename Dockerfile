FROM node:13-alpine

CMD yarn install

EXPOSE 3000
ENTRYPOINT [ "bin/index.js" ]
