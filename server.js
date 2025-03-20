const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connecté');

    // Envoie un message au client
    socket.send('Bienvenue sur le serveur WebSocket!');

    // Réception des messages du client
    socket.on('message', (message) => {
        console.log(`Message reçu du client : ${message}`);

        // Réponse au client
        socket.send(`Message reçu: ${message}`);
    });

    // Gestion de la fermeture de connexion
    socket.on('close', () => {
        console.log('Client déconnecté');
    });
});

console.log('Serveur WebSocket démarré sur ws://localhost:8080');
