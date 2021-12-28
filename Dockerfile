FROM node:14


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

# RUN npx pm2 start server.js

# CMD npm run build && node server.js


CMD [ "node", "server.js"]