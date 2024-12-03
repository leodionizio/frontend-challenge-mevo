FROM node:20-alpine AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM node:20-alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY --from=build /app/build /app/build
COPY server.js /app/server.js

EXPOSE 3000 3001

CMD ["node", "server.js"]
