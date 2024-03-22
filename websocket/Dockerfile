FROM node:20.10-alpine3.17

WORKDIR /websocket

# Copy package.json and package-lock.json first to leverage Docker cache
COPY ./websocket/package*.json ./

# Install npm dependencies
RUN npm install

# Move up one level to the parent directory and copy .env
#COPY ./.env ./

# Copy the rest of the application files
COPY ./websocket/ ./

# Expose the port
EXPOSE 3000
CMD npm start
