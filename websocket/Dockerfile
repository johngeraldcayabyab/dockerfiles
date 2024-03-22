FROM node:20.10-alpine3.17

WORKDIR /websocket

# Copy package.json and package-lock.json first to leverage Docker cache
COPY ./package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application files
COPY ./ ./

# Expose the port
EXPOSE 3000
CMD npm start
