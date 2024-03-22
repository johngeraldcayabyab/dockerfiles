FROM node:20.10-alpine3.17

WORKDIR /websocket

COPY ./package*.json ./

RUN npm install

COPY ./ ./

# Expose the port
EXPOSE 3000
CMD npm start
