const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('message', (message) => {
        console.log(`Received: ${message}`);

        // Responder con un mensaje de confirmación y una respuesta del servidor
        socket.send(`Mensaje recibido: ${message}`);
        socket.send(`El servidor dice: Hola!`);
    });

    socket.on('close', () => console.log('Client disconnected'));
});

console.log('WebSocket server running on ws://localhost:8080');

