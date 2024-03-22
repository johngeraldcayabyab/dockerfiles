const http = require('http');
const socketIO = require('socket.io');
require('dotenv').config();


const APP_URL = "http://localhost";
const APP_PORT = 8888 || 80;
const ORIGIN = `${APP_URL}:${APP_PORT}`;
const SERVER_PORT = 3000;


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


server.listen(SERVER_PORT, () => {
    console.log('test');
});
