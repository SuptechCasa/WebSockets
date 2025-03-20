const socket = new WebSocket('ws://192.168.0.27:8080/adil');

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
    const recepteur=document.getElementById('recepteur').value;
    const data={message:message,recepteur:recepteur}
    socket.send(JSON.stringify(data));
    document.getElementById('message').value = '';
}