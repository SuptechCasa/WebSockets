const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
    console.log('Connecté au serveur WebSocket');
};

socket.onmessage = (event) => {
    console.log('Message reçu :', event.data);
    document.getElementById('output').innerHTML += `<br>${event.data}`;
};

socket.onclose = () => {
    console.log('Déconnecté du serveur');
};

function sendMessage() {
    const message = document.getElementById('message').value;
    socket.send(message);
    document.getElementById('message').value = '';
}