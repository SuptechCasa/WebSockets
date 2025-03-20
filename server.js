const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

clients={}

server.on('connection', (socket,req) => {
    id=req.url.substring(1)
    console.log('Client connecté:'+id);
    //Enregistrer le client
    clients[id]=socket
    console.log(Object.keys(clients))
    // Envoie un message au client
    socket.send('Bienvenue sur le serveur WebSocket!');

    // Réception des messages du client
    socket.on('message', (message) => {
        console.log(`Message reçu du client : ${message}`);

        // Réponse au client
        const data=JSON.parse(message)
        console.log(data.to)
        clients[data.to].send(`Message reçu: ${message}`);
    });

    // Gestion de la fermeture de connexion
    socket.on('close', () => {
        console.log('Client déconnecté:'+id);
        delete clients[id]
    });
});

console.log('Serveur WebSocket démarré sur ws://localhost:8080');
