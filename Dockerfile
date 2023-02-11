FROM node:16

ENV NODE_ENV=development

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["node","server.js"]