
FROM node:16-alpine

WORKDIR /app-web

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

RUN npm run build:css

EXPOSE 3000

CMD ["npm", "start"]