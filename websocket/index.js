const redis = require("redis");
const http = require('http');
const socketIO = require('socket.io');
require('dotenv').config();


const APP_URL = "http://localhost";
const APP_PORT = 8888 || 80;
const ORIGIN = `${APP_URL}:${APP_PORT}`;
const REDIS_HOST = 'redis';
const REDIS_PORT = 6379;
const SERVER_PORT = 3000;

const client = redis.createClient({
    socket: {
        port: REDIS_PORT, host: REDIS_HOST,
    }
});

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.end(JSON.stringify({
        ok: true
    }));
});

const io = socketIO(server, {
    cors: {
        origin: ORIGIN, methods: ["GET", "POST"]
    }
});


io.on('connection', function (socket) {
    console.log('user connected to server!');
    socket.on('disconnect', function () {
        console.log('user left');
        socket.disconnect();
    });
});


const feBeSubscriber = client.duplicate();

(async () => {
    await feBeSubscriber.connect();
    await feBeSubscriber.subscribe('backend-channel', (message) => {
        console.log(message);
        io.sockets.emit('frontend-channel', message);
    });
})();


server.listen(SERVER_PORT, () => {
    console.log('test');
});
