FROM node:18-alpine

WORKDIR /var/app

COPY package.json  ./

RUN npm install -g npm@9.6.7

COPY ./ ./

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start"]