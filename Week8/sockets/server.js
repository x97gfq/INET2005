const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://127.0.0.1:5500', // Replace with your client's origin
        methods: ['GET', 'POST']
    }
});

app.use(cors({
    origin: 'http://127.0.0.1:5500' // Replace with your client's origin
}));

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.emit('notification', 'Welcome! You are connected.');

    socket.on('message', (msg) => {
        console.log('Received message:', msg);
        io.emit('notification', msg);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
